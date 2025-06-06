import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AllJobs from './pages/AllJobs.jsx'
import Stats from './pages/Stats.jsx'
import Logout from './pages/logout.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App />},
  {path:'/alljobs',element:<AllJobs />},
  {path:'/stats',element:<Stats />},
  {path:'/logout',element:<Logout />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
