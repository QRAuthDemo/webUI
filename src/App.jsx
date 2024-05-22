import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      {isLoggedIn?<Dashboard/> :<Login setIsLoggedIn={setIsLoggedIn}/>}
      <ToastContainer />

    </>
  )
}

export default App
