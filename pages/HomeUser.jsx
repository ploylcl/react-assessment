import React from "react";
import '../src/App.css'
export default function HomeUser() {
    return (
        <div className="user-page-container">
            <h1>Generation Thailand Home - User Sector</h1>
            <div className="btn-container">
                <button className="btn">User Home Sector</button>
                <button className="btn"> Admin Home Sector</button>
            </div>

            <div className="user-table-container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Position</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}