import React from "react";
import { useState, useRef } from "react";
import '../src/App.css'
import Navbar from "../component/Navbar";
import AdminAndUserBtn from "../component/AdminAndUserBtn";
export default function HomeAdmin() {

    const [name, setname] = useState('');
    const rName = useRef("");
    const [lastName, setLastName] = useState('')
    const rLastName = useRef("");
    const [positon, setPosition] = useState('')
    const rPositon = useRef("");


    const handleSubmit = (e) => {
        e.preventDefault();
        rName.current.value = "";
        rLastName.current.value = "";
        rPositon.current.value = "";
        console.log({ name }, { lastName }, { positon })
    }

    return (
        <div>
            <Navbar />
            <div className="user-page-container">
                <h1>Generation Thailand Home - Admin Sector</h1>
                <AdminAndUserBtn />
                <form className="addUserForm" onSubmit={handleSubmit} >
                    <label htmlFor="name">name</label>
                    <input value={name} ref={rName} onChange={(e) => setname(e.target.value)} />

                    <label htmlFor="lastName">lastName</label>
                    <input value={lastName} ref={rLastName} onChange={(e) => setLastName(e.target.value)} />

                    <label htmlFor="position">position</label>
                    <input value={positon} ref={rPositon} onChange={(e) => setPosition(e.target.value)} />

                    <button type="submit">save</button>
                </form>
                <div className="user-table-container">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Position</th>
                            <th>Action

                                <button>deleted</button>

                            </th>
                        </tr>
                    </table>
                </div>

                <button>deleted</button>
            </div>
        </div>
    )
}