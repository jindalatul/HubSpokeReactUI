import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * JsMindMap — Final (React, no TS)
 *
 * Features
 * - StrictMode-safe (won’t double-initialize)
 * - Collapses all hubs; expands the first (configurable)
 * - Clicking a different hub collapses the previous and expands the clicked
 * - Thin connector lines
 * - Pill-shaped hubs/spokes: thin border, no fill, no shadow (via injected CSS)
 * - Optional `forceRight` to render all hubs to the right of the seed
 *
 * Requirements
 * - Place `jsmind.js` and `jsmind.css` into /public and include in public/index.html BEFORE your React bundle:
 *   <link rel="stylesheet" href="/jsmind.css" />
 *   <script src="/jsmind.js"></script>
 */

export default function JsMindMap({
  data,
  height = 720,
  initialExpandedHubIndex = 0,
  theme = "primary",
  lineWidth = 1,                // thin connectors
  lineColor = "#E5E7EB",        // neutral connectors
  injectStyles = true,          // inject pill CSS overrides
  forceRight = false,           // force hubs to render on the right
  onHubChange,                  // (id, title) => void
}) {
  const containerRef = useRef(null);
  const containerIdRef = useRef(`jsmind_${Math.random().toString(36).slice(2)}`);
  const jmRef = useRef(null);
  const initedRef = useRef(false);
  const clickHandlerRef = useRef(null);
  const activeHubIdRef = useRef(null);      // readable in event handler without re-binding

  // Gather hub IDs (direct children of root)
  const hubIds = useMemo(() => {
    if (!data || !Array.isArray(data.children)) return [];
    return data.children.map((h) => h.id);
  }, [data]);

  // Initialize jsMind once (after script + container ready)
  useEffect(() => {
    if (initedRef.current) return;
    const el = containerRef.current;
    const hasJsMind = typeof window !== "undefined" && !!window.jsMind;
    if (!el || !hasJsMind) return; // wait until both exist

    const jm = new window.jsMind({
      container: containerIdRef.current, // pass id string (works across builds)
      editable: false,
      theme,
      support_html: true,
      view: {
    hmargin: 200,       // default is ~100, increase for longer connectors
    vmargin: 50,        // vertical margin
    line_width: 1,
    line_color: "#E5E7EB"
  },
    });
    jmRef.current = jm;
    initedRef.current = true;

    return () => {
      // Cleanup on component unmount
      const node = containerRef.current;
      if (clickHandlerRef.current && node) {
        node.removeEventListener("click", clickHandlerRef.current);
        clickHandlerRef.current = null;
      }
      jmRef.current = null;
      initedRef.current = false;
    };
  }, [theme, lineWidth, lineColor]);

  // Render data (and wire behavior) when instance is ready or data changes
  useEffect(() => {
    const jm = jmRef.current;
    const el = containerRef.current;
    if (!jm || !el) return;

    // Optionally coerce hubs to direction: "right"
    const coerced = forceRight
      ? {
          ...data,
          children: (data.children || []).map((h) => ({ direction: "right", ...h })),
        }
      : data;

    // Render
    const mind = {
      meta: { name: "hubspoke", author: "React", version: "1.0" },
      format: "node_tree",
      data: coerced,
    };
    jm.show(mind);

    // Tag hubs/spokes for CSS after jsMind paints
    setTimeout(() => {
      (coerced.children || []).forEach((hub) => {
        const hubEl = document.querySelector(`.jmnode[nodeid="${hub.id}"]`);
        if (hubEl) hubEl.classList.add("hub-node");
        (hub.children || []).forEach((spoke) => {
          const spokeEl = document.querySelector(`.jmnode[nodeid="${spoke.id}"]`);
          if (spokeEl) spokeEl.classList.add("spoke-node");
        });
      });
    }, 0);

    // Collapse all, then expand the initial hub
    try {
      typeof jm.collapse_all === "function" && jm.collapse_all();
    } catch (_) {}
    const defaultHubId =
      hubIds[Math.min(Math.max(initialExpandedHubIndex, 0), Math.max(0, hubIds.length - 1))];
    if (defaultHubId) {
      try {
        jm.select_node(defaultHubId);
        jm.expand_node(defaultHubId);
        activeHubIdRef.current = defaultHubId;
        if (onHubChange) {
          const node = jm.get_node(defaultHubId);
          onHubChange(defaultHubId, node?.topic || "");
        }
      } catch (_) {}
    }

    // Attach ONE click handler for hub toggling
    if (clickHandlerRef.current) {
      el.removeEventListener("click", clickHandlerRef.current);
      clickHandlerRef.current = null;
    }
    const onClick = (e) => {
      const nodeEl = e.target.closest && e.target.closest(".jmnode");
      if (!nodeEl) return;
      const nodeId = nodeEl.getAttribute("nodeid");
      if (!nodeId) return;

      // Only toggle hubs (direct children of root)
      if (!hubIds.includes(nodeId)) return;

      try {
        const current = activeHubIdRef.current;
        if (current === nodeId) {
          // Toggle same hub
          const n = jm.get_node(nodeId);
          if (n && n.expanded) jm.collapse_node(nodeId);
          else jm.expand_node(nodeId);
          return;
        }
        // Collapse previous
        if (current) {
          const prev = jm.get_node(current);
          if (prev && prev.expanded) jm.collapse_node(current);
        }
        // Expand new
        jm.select_node(nodeId);
        jm.expand_node(nodeId);
        activeHubIdRef.current = nodeId;
        if (onHubChange) {
          const node = jm.get_node(nodeId);
          onHubChange(nodeId, node?.topic || "");
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("jsMind toggle failed:", err);
      }
    };
    clickHandlerRef.current = onClick;
    el.addEventListener("click", onClick);
  }, [data, hubIds, initialExpandedHubIndex, onHubChange, forceRight]);

  return (
    <div
      id={containerIdRef.current}
      ref={containerRef}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        background: "#fff",
      }}
    />
  );
}
