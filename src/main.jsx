import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import AppLayout from './components/AppLayout.jsx'
import App from './App.jsx'
import AllJobs from './pages/AllJobs.jsx'
import Stats from './pages/Stats.jsx'
import Logout from './pages/Logout.jsx'

const router = createBrowserRouter([

  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        index:true,
        element:<App />
      },
      {
        path:'alljobs',
        element:<AllJobs />
      },
      {
        path:'stats',
        element: <Stats />
      },
    ]
  },
  {
    path:'logout',
    element:<Logout />
  }
  
  // {path:'/',element:<App />},
  // {path:'/alljobs',element:<AllJobs />},
  // {path:'/stats',element:<Stats />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
