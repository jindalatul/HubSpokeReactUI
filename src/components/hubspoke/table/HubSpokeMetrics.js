import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function HubSpokeMetrics() {
     return (
        <>
            <section className="row-hub" aria-label="Compact Overview">

                {/*  Cluster Size */}

                <div className="tile">
                    <div className="title">📚 Cluster Size</div>
                    <button className="info" aria-label="What is Cluster Size?">i</button>
                    <div className="tooltip">Number of hubs • spokes • keywords in this plan.</div>

                    <div id="kpiSize" className="value">18•216•1743</div>
                    <div className="sub">Hubs • Spokes • Keywords</div>
                </div>

                {/*  Traffic Potential */}

                <div className="tile">
                    <div className="title">🔥 Traffic Potential</div>
                        <button className="info" aria-label="What is Traffic Potential?">i</button>
                    <div className="tooltip">Projected monthly clicks derived from keyword volume × CTR model.</div>

                    <div id="kpiPotential" className="value">48,575</div>
                    <div id="trendPotential" className="trend up">▲ +17%</div>
                </div>
                
                {/* Traffic Value */}

                <div className="tile">
                    <div className="title">💲 Traffic Value</div>
                    <button className="info" aria-label="What is Traffic Value?">i</button>
                    <div className="tooltip">Estimated monthly value = projected clicks × blended CPC.</div>

                    <div id="kpiValue" className="value">$5.21</div>
                    <div id="trendValue" className="trend up">▲ +7%</div>
                </div>

                {/* Avg KD */}

                <div className="tile">
                    <div className="title">🎯 Avg KD</div>
                    <button className="info" aria-label="What is Avg KD?">i</button>
                    <div className="tooltip">Average keyword difficulty across the cluster (0–100).</div>

                    <div id="kpiKD" className="value">30</div>
                    <div id="kpiKDNote" className="sub" style={{color: "rgb(146, 64, 14)"}}>Medium</div>
                </div>

                {/* KW Difficulty Mix */}

                <div className="tile">
                    <div className="title">📊 KW Difficulty Mix</div>
                    <button className="info" aria-label="What is KW Mix?">i</button>
                    <div className="tooltip">Share of Easy (0–30), Medium (31–60), and Hard (61+) keywords.</div>

                    <div className="mix" id="mixBlocks">
                        <div className="block easy">
                            <div className="name">Easy</div>
                            <div id="mixEasy" className="pct">29%</div>
                        </div>
                        <div className="block med">
                            <div className="name">Medium</div>
                            <div id="mixMed" className="pct">35%</div>
                        </div>

                        <div className="block hard">
                            <div className="name">Hard</div>
                            <div id="mixHard" className="pct">36%</div>
                        </div>
                    </div>
                </div>

                {/* Ranking Potential */}

                <div className="tile wide">
                    <div className="title">🏎 Ranking Potential</div>
                    <button className="info" aria-label="What is Ranking Potential?">i</button>
                    <div className="tooltip">0–100 score blending difficulty, coverage, and internal link depth (demo).</div>

                    <div>
                        <span id="rankScore" className="badge-big">89</span>
                        <span id="rankLabel" className="rank-label">High</span>
                    </div>
                    <div className="bar" aria-label="Ranking progress">
                        <div id="rankFill" className="fill good" style={{width: "89%"}}></div>
                    </div>
                </div>

            </section>
        </>
     );
}

/*











*/
