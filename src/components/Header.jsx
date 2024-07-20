import React from 'react'
import Navbar from './common/Navbar'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Header