import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Login/Login.jsx'
import Registration from './Registration/Registration.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/registration',
        element: <Registration></Registration>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
