import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopNav from "../../common/topNav.js";
import Footer  from "../../common/footer.js";
import transformToJsMind from "./convertFormat.js";

import SimpleMindMap from "./HubSpokeMindMap.js";

export default function HubSpokeMindMapView(props)
{
    const [openItemId, setOpenItemId] = useState(props.hubSpokesData.hubs[0].id);
    
        //props.sidebarAction(true);

        const jsMindArray = transformToJsMind(props.hubSpokesData, {
            rootId: "glamping_root",
            rootTopic: "Glamping Master Map",
            format: "node_array",
            alternateDirections: false,
        });

    //console.log(jsMindArray);

    return (
        <>
                <div style={{ width: "100vw", height: "100vh" }}>
                    <SimpleMindMap mindmap={jsMindArray} handleHubSpokeMindMapClick = {props.sidebarAction} />
                </div>
        </>
     );
}