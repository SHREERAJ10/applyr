import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AllJobs from './pages/AllJobs.jsx'
import Stats from './pages/Stats.jsx'
import LandingPage from './pages/LandingPage.jsx'

function App() {

  const storageKey = "jobEntries";

  function getData() {
    const storageKey = "jobEntries";
    let data = JSON.parse(localStorage.getItem(storageKey));
    return data==null?[]:data;
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element: <LandingPage />,
    },
    {
      path: '/applyr',
      element: <AppLayout />,
      children: [
        {
          index:true,
          element: <Navigate to='dashboard' replace />
        },
        {
          path: 'dashboard',
          element: <Dashboard getData={getData} storageKey={storageKey} />
        },
        {
          path: 'alljobs',
          element: <AllJobs getData={getData} storageKey={storageKey} />
        },
        {
          path: 'stats',
          element: <Stats getData={getData} />
        },
      ]
    }
  ]);

  return (
    <div className="lg:bg-stone-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
