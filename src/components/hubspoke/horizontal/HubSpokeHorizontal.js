import { useEffect, useRef } from "react";

export default function SimpleMindMap() {
  const containerRef = useRef(null);
  const initedRef = useRef(false);

  useEffect(() => {
    if (initedRef.current) return;
    initedRef.current = true;

    const JM = window.jsMind;
    if (!JM) {
      console.error("window.jsMind is undefined. Check jsMind <script> in public/index.html.");
      return;
    }

    // --- BIG DATASET: 15 hubs, each 10–15 spokes ---
    const mind = makeLargeMind({
      seed: "Glamping",
      hubCount: 15,
      minSpokes: 10,
      maxSpokes: 15,
    });

    console.log(mind);
    
    const jm = new JM({
      container: containerRef.current, // same pattern you had working
      editable: false,
      theme: "primary",
      view: { hmargin: 80, vmargin: 60, line_width: 0.4, line_color: "#cbd5e1" },
      layout: { hspace: 480, vspace: 22, pspace: 20 },
    });

    jm.show(mind);

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
    
      //alert(1)
      const nodeEl = evt.target?.closest?.(".jmnode");
      if (!nodeEl) return;

      const nodeId = nodeEl.getAttribute("nodeid");
      if (!nodeId) return;

      const node = jm.get_node(nodeId);
      if (!node) return;

      // hub = direct child of root
      const isHub = node.parent && node.parent.id === rootNode.id;
      if (!isHub) return;

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
  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}

/* ---------------- helpers: large random-ish dataset ---------------- */

function makeLargeMind({ seed, hubCount = 15, minSpokes = 10, maxSpokes = 15 }) {
  const hubTitles = [
    "Top Destinations","Packing Lists","Activities & Adventures","Gear & Equipment","Campsite Setup",
    "Food & Cooking","Safety & First Aid","Family & Kids","Couples & Romance","Pet-Friendly Tips",
    "Eco-Friendly Glamping","Seasonal Guides","Budget & Deals","Itineraries & Routes",
    "Photography & Content","Accessibility & Comfort","Weather & Planning"
  ];

  const pools = {
    "Top Destinations": ["California Coast","Yosemite Area","Sequoia NP","Joshua Tree","Big Sur","Texas Hill Country","Colorado Rockies","Oregon Coast","Sedona AZ","Smoky Mountains","New England Fall","Florida Springs","Montana Glacier","Utah Moab","Lake Tahoe"],
    "Packing Lists": ["Essentials","Cold-Weather Gear","Rain Setup","Kids Must-Haves","Compact Kitchen Kit","First Aid Basics","Power & Charging","Lighting","Bedding & Linens","Footwear","Toiletries","Organizers","Bug Protection","Sun Protection","Daypack Items"],
    "Activities & Adventures": ["Hiking Trails","Kayaking Spots","Stargazing Tips","Wildlife Watching","Mountain Biking","Rock Climbing","Fishing","Horseback Riding","Cave Tours","Ziplining","ATV Trails","Hot Springs","Birding","Scenic Drives","Camp Games"],
    "Gear & Equipment": ["Tents vs Domes","Bedding Options","Stoves & Grills","Coolers & Fridges","Heaters & Fans","Solar Panels","Power Stations","Water Filters","Lanterns & Headlamps","Camp Furniture","Backpacks","Dry Bags","Knives & Tools","Emergency Radios","Repair Kits"],
    "Campsite Setup": ["Choosing a Spot","Leveling Ground","Wind Orientation","Shade & Rain","Tent Anchoring","Guy Lines","Kitchen Triangle","Trash & Critter Safety","Campfire Safety","Gray Water","Lighting Layout","Privacy Setup","Noise Control","Leave No Trace","Checklists"],
    "Food & Cooking": ["One-Pot Meals","Foil Pack Recipes","Breakfast Ideas","Coffee & Tea","Dutch Oven Basics","Grilling Meats","Veggie Options","Snacks & Trail Mix","Desserts","Meal Prep","Cooler Management","Spices & Oils","Kids Menu","Gluten-Free Options","Vegan Camping"],
    "Safety & First Aid": ["First Aid Kit","Blisters & Sprains","Dehydration","Altitude Sickness","Wildlife Safety","Bear Canisters","Fire Safety","Weather Alerts","Navigation Basics","Emergency Signals","Bug Bites","Poisonous Plants","Water Safety","Head Injuries","Heat & Cold Stress"],
    "Family & Kids": ["Kid-Friendly Hikes","Scavenger Hunts","Bedtime Routines","Snack Planning","Safe Camp Zones","Rainy-Day Games","Nature Journals","STEM in Nature","Star Charts","S’mores Variations","Photo Challenges","Packing for Kids","Nap-Friendly Setup","Noise Control","Portable Highchair"],
    "Couples & Romance": ["Secluded Sites","Sunset Spots","Stargazing Setup","Hot Drinks Bar","Candle-Like Lights","Cozy Bedding","Music Ideas","Photo Moments","Private Hammocks","Couple Games","Breakfast in Tent","Picnic Kits","SPA-like Touches","Surprise Plans","Memory Book"],
    "Pet-Friendly Tips": ["Leash Laws","Pet Packing List","Trail Etiquette","Dog-Friendly Sites","Paw Protection","Cooling Mats","Food & Water","Night Safety","Waste Disposal","Tick Checks","Pet First Aid","Behavior Training","Noise Desensitization","Vehicle Safety","Pet ID Tags"],
    "Eco-Friendly Glamping": ["Leave No Trace","Solar Power","Reusable Gear","Water Conservation","Eco Soap","Waste Sorting","Local Sourcing","Low-Impact Fires","Carpooling","Trail Care","Wildlife Respect","Noise Reduction","Dark Sky Friendly","Biodegradables","Minimalist Packing"],
    "Seasonal Guides": ["Spring Blooms","Summer Heat","Monsoon Prep","Fall Colors","Winter Snow","Shoulder Seasons","Allergy Tips","Daylight Planning","Layering Clothes","Sleeping Bag Ratings","Heaters & Safety","Condensation Control","Storm Readiness","Snow Traction","Road Closures"],
    "Budget & Deals": ["Off-Season Rates","Midweek Savings","Passes & Permits","Group Splits","Gear Rentals","Used Gear","Meal Budgeting","Fuel Efficiency","Free Activities","Discount Codes","Camp Memberships","Local Markets","DIY Hacks","Cash vs Cards","Avoiding Fees"],
    "Itineraries & Routes": ["3-Day Yosemite","Pacific Coast Loop","Sierra Foothills","Texas Hill Loop","Utah Mighty 5","Arizona Red Rocks","Rockies Sampler","Oregon Cascades","Lake District","Desert & Springs","Wine Country","Coastal Forests","Canyons & Mesas","Bay to Mountains","Lakes & Rivers"],
    "Photography & Content": ["Golden Hour","Night Sky","Tripod Basics","Phone Tricks","Composition Rules","RAW vs JPEG","Battery Care","Weather Protection","Storyboarding","Shot List","Editing Apps","Backup Workflow","Time-Lapse","Timber Tripods","Ethical Wildlife Shots"],
    "Accessibility & Comfort": ["Flat Sites","Ramp Access","Wide Door Tents","Handrails","Seating Height","Mattress Options","Lighting Placement","Path Marking","Noise Dampening","Warmth Control","Portable Toilets","Handwashing","Shower Solutions","Charging Access","All-ages Tips"],
    "Weather & Planning": ["Forecast Tools","Radar Apps","Backup Plans","Wind Maps","Sunrise/Sunset","UV Index","Humidity & Dew","Fronts & Systems","Storm Warnings","Road Conditions","Snow Chains","Camp Closures","Fire Restrictions","Heat Waves","Cold Snaps"],
  };

  const nodes = [{ id: "root", isroot: true, topic: seed }];

  // build hubs and spokes
  for (let i = 0; i < hubCount; i++) {
    const title = hubTitles[i % hubTitles.length];
    const hubId = `hub_${i + 1}`;
    nodes.push({ id: hubId, parentid: "root", topic: title });

    const pool = pools[title] || pools["Top Destinations"];
    const count = randInt(minSpokes, maxSpokes);
    sample(pool, count).forEach((spoke, j) => {
      nodes.push({ id: `${hubId}_${j + 1}`, parentid: hubId, topic: spoke });
    });
  }

  return {
    meta: { name: `${slug(seed)}-map`, author: "Atul", version: "1.0" },
    format: "node_array",
    data: nodes,
  };
}

function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function sample(arr, n) {
  const copy = [...arr], out = [];
  while (out.length < Math.min(n, copy.length)) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}
function slug(s) { return s.toLowerCase().replace(/\s+/g, "-"); }
