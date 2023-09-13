import React from "react";
import { useState, useRef, useEffect } from "react";
import '../src/App.css'
import Navbar from "../component/Navbar";
import AdminAndUserBtn from "../component/AdminAndUserBtn";
import axios from "axios";
import AddData from "../component/AddData";
import DataTable from "../component/DataTable";


export default function HomeAdmin(props) {

    const [name, setname] = useState();
    const [lastname, setlastname] = useState()
    const [position, setPosition] = useState()

    const [data, setdata] = useState([])
    const client = axios.create({
        baseURL: 'https://jsd5-mock-backend.onrender.com/members'
    })
    const clientDelet = axios.create({
        baseURL: 'https://jsd5-mock-backend.onrender.com/member/'
    })
    const fetchData = async () => {
        const response = await client.get('');
        setdata(response.data);
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, []);


    const addData = async (name, lastname, position) => {
        const response = await client.post('', {
            name,
            lastname,
            position
        });
        setdata((prevData) => [response.data, ...prevData])
    };

    const deleteData = async (id) => {
        const response = await clientDelet.delete(`${id}`);
        setdata(data.filter((d) => d.id !== id))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPost(name, lastname, position);
        setname('');
        setlastname('');
        setPosition('');

    };


    return (
        <div>
            <Navbar />
            <div className="user-page-container">
                <h1>Generation Thailand Home - Admin Sector</h1>
                <AdminAndUserBtn />
                <AddData addData={addData} />
                {data.map((d, i) =>

                    <DataTable
                        key={i}
                        id={d.id}
                        name={d.name}
                        lastname={d.lastname}
                        position={d.position}
                        deleteData={deleteData}
                    />

                )}
            </div>
        </div>
    )
}