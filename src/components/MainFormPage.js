import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopNav from './common/topNav.js';
import SeedTopicForm from './form/SeedTopicForm.js';
import Footer from './common/footer.js';

export default function MainFormPage() {

     return (
        <>
            <TopNav></TopNav>
            <SeedTopicForm></SeedTopicForm>
            <Footer></Footer>
        </>
     );
}
