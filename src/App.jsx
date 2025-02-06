import React from 'react'
import Header from './Components/Header/Header'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App