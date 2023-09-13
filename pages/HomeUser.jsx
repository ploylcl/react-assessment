import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import '../src/App.css'
import AdminAndUserBtn from "../component/AdminAndUserBtn";
import Navbar from "../component/Navbar";
import UserTable from "../component/UserTable";
export default function HomeUser() {
    const [data, setdata] = useState([])
    const client = axios.create({
        baseURL: 'https://jsd5-mock-backend.onrender.com/members'
    })

    const fetchData = async () => {
        const response = await client.get('');
        setdata(response.data);
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="user-page">
            <Navbar />
            <div className="user-page-container">
                <h1>Generation Thailand Home - User Sector</h1>
                <AdminAndUserBtn />

                <div className="user-table-container">
                    {data.map((d, i) =>

                        <UserTable
                        key={i}
                        id={d.id}
                        name={d.name}
                        lastname={d.lastname} 
                        position={d.position} 
                            
                        />

                    )}
                    
                </div>
            </div>
        </div>

    )
}