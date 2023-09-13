import React from "react";
import '../src/App.css'
import Navbar from "../component/Navbar";
export default function HomeNormal() {
    return (
        <div>
            <Navbar />
            <div className="normal-page-container">
                <h1>Generation Thailand React - Assessment</h1>
                <div className="normal-btn-container">
                    <button className="btn">User Home Sector</button>
                    <button className="btn"> Admin Home Sector</button>
                </div>
            </div>
        </div>
    )
}