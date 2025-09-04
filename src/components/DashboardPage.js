import React, { useState, useEffect } from "react";

import mapData from "../mapData.js";

import TopNav from './common/topNav.js';
import Footer from './common/footer.js';
import LoadingSpinner  from "./common/loadingSpinner.js";

import HubSpokeMindMapView from "./hubspoke/mindmap/HubSpokeMindMapView.js";
import HubSpokeTableView from "./hubspoke/table/HubSpokeTableView.js";

// Lets fetch Data here for Hubs and Spokes using API. And pass data in Props.


export default function DashboardPage()
{
    const [showFirstView, setShowFirstView] = useState(true);

      const [hubSpokeData, setHubSpokeData] = useState({});
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

    function handleToggle() 
    {
        setShowFirstView(!showFirstView);
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
            }, 2000); // 2 second delay
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
                        <button onClick={handleToggle}>
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
                {showFirstView ? <HubSpokeMindMapView hubSpokesData={hubSpokeData} /> : <HubSpokeTableView hubSpokesData={hubSpokeData} />}  
                </div>
                
            <Footer></Footer>
        </>
     );
}