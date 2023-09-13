import React from "react";
import '../src/App.css'
import Navbar from "../component/Navbar";
import AdminAndUserBtn from "../component/AdminAndUserBtn";

export default function HomeNormal() {
    

    return (
        <div>
            <Navbar />
            <div className="normal-page-container">
                <h1>Generation Thailand React - Assessment</h1>
                <AdminAndUserBtn />
            </div>
        </div>
    )
}