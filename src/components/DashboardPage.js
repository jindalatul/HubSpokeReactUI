import React, { useState, useEffect } from "react";

import mapData from "../mapData.js";

import TopNav from './common/topNav.js';
import Footer from './common/footer.js';
import LoadingSpinner  from "./common/loadingSpinner.js";

import { SidebarSlideInOut } from "./SidebarSlideInOut.js";

import HubSpokeMindMapView from "./hubspoke/mindmap/HubSpokeMindMapView.js";
import HubSpokeAccordion from "./hubspoke/accordion/hubspokeAccordion.js";

//import HubSpokeTableView from "./hubspoke/table/HubSpokeTableView.js";

// Lets fetch Data here for Hubs and Spokes using API. And pass data in Props.


export default function DashboardPage()
{
    const [showFirstView, setShowFirstView] = useState(true);

    const [hubSpokeData, setHubSpokeData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function handleToggle() 
    {
        setShowFirstView(!showFirstView);
    }

    function handleSidebarOpenClose(value,id)
    {
        console.log(id);
        setIsSidebarOpen(value);
        // Call AJAX to pull outline and update dataset.
    }

    // replace this API, and then reduce delay to 10ms instead of 2 sec.

    useEffect(() => {
        fetch("http://localhost:3000/mapData.json")
        .then((response) => response.json())
        .then((json) => {
            // Add artificial delay to show loading
            setTimeout(() => {
            setHubSpokeData(json);
            setLoading(false);
            }, 100); // 2 second delay
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
        console.log(hubSpokeData);
    }, []);

    if (loading) {
        return <LoadingSpinner message="Building Hub Spokes"/>;
    }

    return (
        <>
            <TopNav></TopNav>
                <div style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                    }}>
                        {/* Button text changes based on state */}
                        <button className="btn" onClick={handleToggle}>
                            {showFirstView ? "Show Detailed" : "Show MindMap"}
                        </button>
                </div>
                
                <div style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    }}>
                {/* Conditionally render components */}      
                {showFirstView ? <HubSpokeMindMapView hubSpokesData={hubSpokeData} sidebarAction ={handleSidebarOpenClose} /> : <HubSpokeAccordion 
                             hubSpokesData={hubSpokeData} sidebarAction ={handleSidebarOpenClose} />}  
                </div>
                {/* Sidebar is a separate component */}
                <SidebarSlideInOut isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <Footer></Footer>
        </>
     );
}