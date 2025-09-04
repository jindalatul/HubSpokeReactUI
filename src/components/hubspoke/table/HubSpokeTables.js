import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/*
Design for Hubs
<div className="hub dbl">
    <div className="t">Living Trusts (CA)</div>
        <div className="m">
            <span className="pill">Est. Traffic: 3,981</span>
            <span className="pill">Avg KD: 50</span>
            <span className="pill">Rank Prob: 73%</span>
        </div>
</div>
*/

export default function HubSpokeTables({myData}) 
{
    const [selectedHub, setSelectedHub] = useState(null);
    
    console.log(myData);
    const hubs = Array.isArray(myData?.hubs) ? myData.hubs : [];

    // Select first hub on mount (or when hubs change)
    useEffect(() => {
        if (hubs.length > 0) {
            setSelectedHub(hubs[0]);
        }
    }, [hubs]);

    return (
    <>
    <div className="subhint">💡 Double‑click any hub or spoke to open details.</div>
    <section className="workspace">
        
        {/*<!-- Left: Hubs -->*/}

        <div className="panel hubs-left" id="hubsList">
            <h3>Hubs</h3>

            {/*<!-- hubs injected --> */}
                {
                    hubs.map((hub, index) => (
                    <div className="hub dbl" key={hub.id} onClick={() => setSelectedHub(hub)}
                         style={{
                                cursor: "pointer",
                                backgroundColor: selectedHub?.id === hub.id ? "#eef" : "white",
                            }}>
                                {hub.topic}
                            </div>
                ))}
        </div>

        {/*<!-- Right: Spokes -->*/}

            <div className="panel spokes-right">
                {selectedHub ? (
                    <table>
                        <thead>
                            <tr>
                            <th>Spoke</th>
                            <th>Est. Traffic</th>
                            <th>KD</th>
                            <th>Rank Prob</th>
                            <th>CPC</th>
                            </tr>
                        </thead>
                        <tbody id="spokesBody">
                        {selectedHub.spokes.map((spoke) => (
                            <tr className="dbl" key={spoke.id}>
                                <td>{spoke.topic}</td>
                                <td>1,539</td>
                                <td>41</td>
                                <td><span className="badge2 med">65%</span></td>
                                <td>$4.56</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                     ) : (
                     <p>Click a hub to see details</p>
                    )}
            </div>
        </section>
    </>
    )
}