import { useState } from 'react'
import Navbar from '../component/Navbar'
import HomeNormal from '../pages/HomeNormal'
import HomeUser from '../pages/HomeUser'
import HomeAdmin from '../pages/HomeAdmin'
import Owner from '../pages/Owner'
import'./App.css'
export default function App() {
    return(
        <div>
            <Navbar />
            <HomeNormal /> 
        </div>
    )
}