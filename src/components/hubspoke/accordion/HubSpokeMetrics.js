import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function HubSpokeMetrics(props) {
    //alert(showMetrics);
    if(props.showMetrics==false) return false;

     return (
        <>
            <section className="summary">
                <div className="metric"><div className="lbl">Total Potential Traffic</div><div className="val" id="mTraffic">4,500</div><div className="sub">Across all hubs</div></div>
                <div className="metric"><div className="lbl">Avg Ranking Difficulty</div><div className="val" id="mDifficulty">Moderate</div><div className="sub" id="mDifficultySub">Avg KD 40</div></div>
                <div className="metric"><div className="lbl">Opportunity Keywords</div><div className="val" id="mOpps">23</div><div className="sub">Based on thresholds</div></div>
                <div className="metric"><div className="lbl">Articles (Hubs • Spokes)</div><div className="val" id="mArticles">3 • 9</div><div className="sub">Content pieces to cover</div></div>
            </section>
        </>
     );
}

/*











*/
