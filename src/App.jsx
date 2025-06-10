import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AllJobs from './pages/AllJobs.jsx'
import Stats from './pages/Stats.jsx'
import Logout from './pages/Logout.jsx'

function App() {

  function getData() {
    const storageKey = "jobEntries";
    let data = JSON.parse(localStorage.getItem(storageKey));
    return data==null?[]:data;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Dashboard getData={getData} />
        },
        {
          path: 'alljobs',
          element: <AllJobs getData={getData} />
        },
        {
          path: 'stats',
          element: <Stats getData={getData} />
        },
      ]
    },
    {
      path: 'logout',
      element: <Logout />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
