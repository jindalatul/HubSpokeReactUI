import React, { useState, useEffect } from "react";

import mapData from "../mapData.js";

import TopNav from './common/topNav.js';
import Footer from './common/footer.js';
import HubSpokeMindMapView from "./hubspoke/horizontal/HubSpokeMindMapView.js";
import HubSpokeTableView from "./hubspoke/table/HubSpokeTableView.js";

// Lets fetch Data here for Hubs and Spokes using API. And pass data in Props.


export default function DashboardPage()
{
    const [showFirstView, setShowFirstView] = useState(true);

      const [hubSpokeData, setHubSpokeData] = useState({});
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

    function fetchDataFromAPI()
    {
        // lets call AJAX here to fetch API and everything will work as expected.
        // Include a loader. for fetching data.
        setHubSpokeData(mapData);
    }

    function handleToggle() 
    {
        setShowFirstView(!showFirstView);
    }

    useEffect(() => {
        fetchDataFromAPI();
    }, []);

    return (
        <>
            <TopNav></TopNav>
                <div style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                    }}>
                        {/* Button text changes based on state */}
                        <button onClick={handleToggle}>
                            {showFirstView ? "Show MindMap" : "Show Detailed"}
                        </button>
                </div>
                
                <div style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    }}>
                {/* Conditionally render components */}      
                {showFirstView ? <HubSpokeTableView hubSpokesData={hubSpokeData} /> : <HubSpokeMindMapView hubSpokesData={hubSpokeData} />}  
                </div>
            <Footer></Footer>
        </>
     );
}