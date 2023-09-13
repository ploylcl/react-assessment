import React from "react";
import '../src/App.css'
import AdminAndUserBtn from "../component/AdminAndUserBtn";
export default function HomeUser() {
    return (
        <div>
            <Navbar />
            <div className="user-page-container">
                <h1>Generation Thailand Home - User Sector</h1>
                <AdminAndUserBtn />

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
        </div>

    )
}