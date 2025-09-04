import React, { useState } from "react";

import HubSpokeHeader from "./hubspokeHeader.js";
import HubSpokeMetrics from "./HubSpokeMetrics.js";
import HubSpokeTables from "./HubSpokeTables.js";

export default function HubSpokeTableView({hubSpokesData})
{
    //console.log("------myData-----");
    //console.log(hubSpokesData);

     return (
        <>
            <HubSpokeHeader />
            <HubSpokeMetrics />
            <HubSpokeTables myData = {hubSpokesData}/>
        </>
     );
}
// <HubSpokeTables />
