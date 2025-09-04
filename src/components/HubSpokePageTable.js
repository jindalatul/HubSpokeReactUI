import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './../hubspoke.css';

import TopNav from './common/topNav.js';
import Footer from './common/footer.js';
import HubSpokeHeader from "./hubspoke/table/hubspokeHeader.js";
import HubSpokeMetrics from "./hubspoke/table/HubSpokeMetrics.js";
import HubSpokeTables from "./hubspoke/table/hubspokeHeader.js";

export default function HubSpokePageTable()
{

     return (
        <>
            <TopNav></TopNav>
            <HubSpokeHeader></HubSpokeHeader>
            <HubSpokeMetrics></HubSpokeMetrics>
            <HubSpokeTables />
            <Footer></Footer>
        </>
     );
}
