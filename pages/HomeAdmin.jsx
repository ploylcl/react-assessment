import React from "react";
import  { useState } from "react";
import '../src/App.css'
export default function HomeAdmin() {

    const [name,setname] =useState('');
    const [lastName,setLastName] = useState('')
    const [positon,setPosition] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({name},{lastName},{positon})
    }

    return (
        <div className="user-page-container">
            <h1>Generation Thailand Home - Admin Sector</h1>
            <div className="btn-container">
                <button className="btn">User Home Sector</button>
                <button className="btn"> Admin Home Sector</button>
            </div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">name</label>
                <input value={name} onChange={(e) => setname(e.target.value)}  />

                <label htmlFor="lastName">lastName</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <label htmlFor="LastName">lastName</label>
                <input value={positon} onChange={(e) => setPosition(e.target.value)}  />
                
                <button type="submit">save</button>
            </form>
            <div className="user-table-container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Position</th>
                    </tr>
                </table>
            </div>

            <button>deleted</button>
        </div>
    )
}