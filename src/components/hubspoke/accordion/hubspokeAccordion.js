
import { useMemo, useState } from "react";
import HubSpokeMetrics from "./HubSpokeMetrics.js";

import { ToggleSidebarButton } from "../../SidebarSlideInOut.js";

export default function HubSpokeAccordion(props) {

    const [openItemId, setOpenItemId] = useState(props.hubSpokesData.hubs[0].id);
    
    const hubspoke = props.hubSpokesData;
    console.log(hubspoke);
    
    const handleToggle = (id) => {
        setOpenItemId(openItemId === id ? null : id); // Toggle open/close or close if already open
    };
    
    return (
    <>
    <div className="wrap">
        
        <HubSpokeMetrics showMetrics={false} />
        
        <p className="note">You can move spoke topics between hubs. Drag by the ⠿ handle.</p>

        <div className="accordion" id="accordion">
            { 
                    <div className="accordion">
                    {hubspoke.hubs.map((item) => (
                        <div key={item.id} className="accordion-item">
                            <div className="acc-head" onClick={() => handleToggle(item.id)} 
                                  style={{
                                            background: openItemId === item.id ? "#e5e7eb" : "none"
                                        }}>
                                
                                <div className="acc-title">{item.topic}</div>
                                <div className="acc-meta">{item.spokes.length} spokes</div>

                            </div>
                            {openItemId === item.id && ( // Conditionally render content based on openItemId
                                <div className="accordion-content">
                                    <div className="spokes">
                                        {
                                            item.spokes.map(spoke => (
                                            <div className="spoke" key={spoke.id} ><span className="handle">⠿</span><div className="title">{spoke.topic}</div><div className="row-actions">
                                                <ToggleSidebarButton onToggle={() => props.sidebarAction(true,spoke.id)}  />
                                            </div></div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
            }
        </div>
    </div>
    </>
  );
}