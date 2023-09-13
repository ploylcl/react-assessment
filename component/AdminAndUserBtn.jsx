import React from "react";
import '../src/App.css'
import { Link } from "react-router-dom";
export default function AdminAndUserBtn() {
    return (
        <div className="Btn-container">
            <Link to="/homeUserPage">
                <button>User Home Sector</button>
            </Link>
            
            <Link to="/homeAdminPage">
                <button>Admin Home Sector</button>
            </Link>
        </div>
    )
}

