import React from "react";
import { useState, useRef, useEffect } from "react";
import '../src/App.css'
import Navbar from "../component/Navbar";
import AdminAndUserBtn from "../component/AdminAndUserBtn";
import axios from "axios";

export default function AddData(props) {

    const [name, setname] = useState('');
    const rName = useRef("");
    const [lastname, setlastname] = useState('')
    const rLastName = useRef("");
    const [position, setPosition] = useState('')
    const rPositon = useRef("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.addData(name,lastname, position);
        setname('');
        setlastname('');
        setPosition('');

    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input value={name} ref={rName} onChange={(e) => setname(e.target.value)} />

            <label htmlFor="lastname">lastname</label>
            <input value={lastname} ref={rLastName} onChange={(e) => setlastname(e.target.value)} />

            <label htmlFor="position">position</label>
            <input value={position} ref={rPositon} onChange={(e) => setPosition(e.target.value)} />

            <button type="submit" className="btn-submit">Save</button>
        </form>
    )
};