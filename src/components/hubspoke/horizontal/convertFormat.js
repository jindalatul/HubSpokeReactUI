/**
 * Transform "hub/spokes" schema into jsMind JSON.
 *
 * @param {Object} input - Your hub/spokes JSON (with `hubs: [...]`)
 * @param {Object} [opts]
 * @param {string} [opts.rootId="root"] - id for the jsMind root node
 * @param {string} [opts.rootTopic="Mind Map"] - topic for the jsMind root node
 * @param {("node_tree"|"node_array")} [opts.format="node_tree"] - jsMind format
 * @param {boolean} [opts.alternateDirections=true] - alternate left/right for hubs
 * @param {boolean} [opts.includeMeta=true] - include meta block
 *
 * @returns {Object} jsMind-compatible JSON
 */
export default function transformToJsMind(input, opts = {}) {
  const {
    rootId = "root",
    rootTopic = "Mind Map",
    format = "node_tree",
    alternateDirections = true,
    includeMeta = true,
  } = opts;

  if (!input || !Array.isArray(input.hubs)) {
    throw new Error("Invalid input: expected an object with a 'hubs' array.");
  }

  const meta = includeMeta
    ? { meta: { name: "generated", author: "converter", version: "1.0" } }
    : {};

  if (format === "node_tree") {
    // Build hierarchical tree
    const root = { id: rootId, topic: rootTopic, children: [] };

    input.hubs.forEach((hub, idx) => {
      const hubNode = {
        id: hub.id,
        topic: hub.topic,
        // direction is optional; include if alternating requested
        ...(alternateDirections
          ? { direction: idx % 2 === 0 ? "right" : "left" }
          : {}),
        children: [],
      };

      if (Array.isArray(hub.spokes)) {
        hub.spokes.forEach((s) => {
          hubNode.children.push({
            id: s.id,
            topic: s.topic,
          });
        });
      }

      root.children.push(hubNode);
    });

    return {
      ...(includeMeta ? meta : {}),
      format: "node_tree",
      data: root,
    };
  }

  if (format === "node_array") {
    // Build flat array
    const arr = [
      { id: rootId, isroot: true, topic: rootTopic }
    ];

    input.hubs.forEach((hub, idx) => {
      const hubNode = {
        id: hub.id,
        parentid: rootId,
        topic: hub.topic,
        ...(alternateDirections
          ? { direction: idx % 2 === 0 ? "right" : "left" }
          : {}),
      };
      arr.push(hubNode);

      if (Array.isArray(hub.spokes)) {
        hub.spokes.forEach((s) => {
          arr.push({
            id: s.id,
            parentid: hub.id,
            topic: s.topic,
          });
        });
      }
    });

    return {
      ...(includeMeta ? meta : {}),
      format: "node_array",
      data: arr,
    };
  }

  throw new Error(`Unsupported format: ${format}`);
}

/* ---------------------------
   Example usage (your object)
---------------------------- */

//const hubsInput = /* paste your JSON object here */;

/** node_tree (hierarchical) */
/*
const jsMindTree = transformToJsMind(hubsInput, {
  rootId: "glamping_root",
  rootTopic: "Glamping Master Map",
  format: "node_tree",
  alternateDirections: true, // or false to omit directions entirely
});
*/


/** node_array (flat list) */

/*
const jsMindArray = transformToJsMind(hubsInput, {
  rootId: "glamping_root",
  rootTopic: "Glamping Master Map",
  format: "node_array",
  alternateDirections: true,
});
*/
// You can now pass jsMindTree or jsMindArray directly into jsMind.
