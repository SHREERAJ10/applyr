import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Dashboard from './Dashboard.jsx'
import AllJobs from './pages/AllJobs.jsx'
import Stats from './pages/Stats.jsx'
import Logout from './pages/Logout.jsx'

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: 'alljobs',
          element: <AllJobs getData="test" />
        },
        {
          path: 'stats',
          element: <Stats />
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
