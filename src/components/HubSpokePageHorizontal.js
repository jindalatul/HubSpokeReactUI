import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopNav from "./common/topNav.js";
import Footer  from "./common/footer.js";

import SimpleMindMap from "./hubspoke/horizontal/HubSpokeHorizontal.js";

import mapData from "./../mapData.js";

export default function HubSpokePageHorizontal()
{
    return (
        <>
            <TopNav></TopNav>
                <div style={{
                        marginBottom: "20px",
                        paddingLeft: "40px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    }}>Mindmap | Table View</div>
                <div style={{ width: "100vw", height: "100vh" }}>
                    
                    <SimpleMindMap />
                </div>
            <Footer></Footer>
        </>
     );
}