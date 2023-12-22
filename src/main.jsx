import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Phone from './components/Phone/Phone';
import Phones from './components/Phones/Phones';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
    {
      path: "/phones",
      element: <Phones></Phones>,
      loader: () => fetch('http://localhost:3500/phones')
    },
    {
      path: "/phones/:id",
      element: <Phone></Phone>,
      loader: ({params}) => fetch(`http://localhost:3500/phones/${params.id}`)
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
