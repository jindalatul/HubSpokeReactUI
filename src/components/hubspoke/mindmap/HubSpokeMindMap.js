import { useEffect, useRef } from "react";
import { useState } from "react";

export default function SimpleMindMap(props) {
  const containerRef = useRef(null);
  const initedRef = useRef(false);
  
  let mindmap = props.mindmap;
  console.log(mindmap);
  
  //return false;
  
  useEffect(() => {
    if (initedRef.current) return;
    initedRef.current = true;

    const JM = window.jsMind;
    if (!JM) {
      console.error("window.jsMind is undefined. Check jsMind <script> in public/index.html.");
      return;
    }
    
    //console.log(mind);
    
    const jm = new JM({
      container: containerRef.current, // same pattern you had working
      editable: false,
      theme: "primary",
      view: { hmargin: 80, vmargin: 30, line_width: 0.4, line_color: "#cbd5e1" },
      layout: { hspace: 280, vspace: 22, pspace: 20 },
    });

    jm.show(mindmap);

    // 1) Hide expanders (CSS after jsmind.css)
    const style = document.createElement("style");
    style.textContent = ".jsmind-inner .jmexpander{display:none!important}";
    document.head.appendChild(style);

    const rootNode = jm.get_root();

    // Collapse all hubs first
    (rootNode?.children || []).forEach((hub) => {
    try { jm.collapse_node(hub.id); } catch {}
    });

    // Expand the first hub (if it exists)
    if (rootNode?.children && rootNode.children.length > 0) {
    try { jm.expand_node(rootNode.children[0].id); } catch {}
    }

    // 3) Click HUB to toggle (one hub open at a time) — SAME approach you used
    const onClick = (evt) => {
    
      let showSidebar = false;
      // alert(1); setIsSidebarOpen(true);

      const nodeEl = evt.target; //evt.target?.closest?.(".jmnode");

      // Change the logic of click HUB or spoke here
      console.log(evt.target);

      if (!nodeEl) return;

      const nodeId = nodeEl.getAttribute("nodeid");
      if (!nodeId) return;

      const node = jm.get_node(nodeId);

      if (!node) return;  
      else 
        showSidebar=true;
      
      //alert(nodeId);

      // hub = direct child of root
      /*
      const isHub = node.parent && node.parent.id === rootNode.id;
      if (!isHub)  return;
      */
     const isHub = node.parent && node.parent.id === rootNode.id;
     if ((!isHub)  && (!node)) return; 
     
     if((!isHub)  && (node)) {     
      props.handleHubSpokeMindMapClick(showSidebar,nodeId);
      return; 
      }
    if(isHub)
    {
      props.handleHubSpokeMindMapClick(showSidebar,nodeId);
    }
    if (!isHub)  return;
      
      // collapse other hubs
      (rootNode.children || []).forEach((child) => {
        if (child.id !== node.id) { try { jm.collapse_node(child.id); } catch {} }
      });

      // toggle this hub
      try {
        node.expanded ? jm.collapse_node(node.id) : jm.expand_node(node.id);
      } catch {}
    };

    const container = containerRef.current;
    container.addEventListener("click", onClick);

    return () => {
      container.removeEventListener("click", onClick);
      style.remove();
      try { jm.destroy && jm.destroy(); } catch {}
    };
  }, []);

  // IMPORTANT: parent must give real height (e.g., 100vh in App)
  return (
  <>
    <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
  </>);
}
