import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Dev from './pages/Dev/Dev.jsx';
import Support from './pages/Support/Support.jsx';
import { AppContext } from './Context/AppContext.jsx'
import { Toaster } from 'react-hot-toast';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dev',
    element: <Dev />
  },
  {
    path: '/support',
    element: <Support />
  }
])

const App = () => {

  let {mode} = useContext(AppContext)

  return (
    <div className={`app-container ${mode ? 'white-theme': 'black-theme'}`}>
      <RouterProvider router={router} />
      <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            className: 'bold',
            duration: 4000,
            style: {
              borderRadius: '25px',
              marginBottom: '3em',
              textAlign: 'center'
            },
          }}
      />
    </div>
  )
}

export default App