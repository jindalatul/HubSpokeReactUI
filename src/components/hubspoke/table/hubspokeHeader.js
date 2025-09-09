import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function HubSpokeHeader() {
     return (
        <>
            <div className="subheader" id="subHeader">
                <div className="subheader-inner">
                    <h1 id="contextTitle">Hub–Spoke Topics Dashboard</h1>
                    <div id="seedLine" className="sub">Seed Topic: Topic Name</div>
                    
                    <div className="actions">
                        <small id="ver">v1.0 | v1.1</small>
                        <button id="exportBtn" className="btn" type="button">
                        ⬇ Export
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
     );
}
