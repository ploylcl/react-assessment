import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomeAdmin from '../pages/HomeAdmin.jsx'
import HomeNormal from '../pages/HomeNormal.jsx'
import HomeUser from '../pages/HomeUser.jsx'
import Owner from '../pages/Owner.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homeAdminPage",
    element: <HomeAdmin />,
  },
  {
    path: "/homeNormalPage",
    element: <HomeNormal />,
  },
  {
    path: "/homeUserPage",
    element: <HomeUser />,
  },
  {
    path: "/OwnerPage",
    element: <Owner />,
  },


]);

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
);
