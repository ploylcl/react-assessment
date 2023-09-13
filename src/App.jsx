import { useState } from 'react'
import Navbar from '../component/Navbar'
import HomeNormal from '../pages/HomeNormal'
import HomeUser from '../pages/HomeUser'
import HomeAdmin from '../pages/HomeAdmin'
import'./App.css'
export default function App() {
    return(
        <div>
            <Navbar />
            {/* <HomeNormal /> */}
            {/* <HomeUser /> */}
            <HomeAdmin />
        </div>
    )
}