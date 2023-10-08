import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Stickywall() {
  return (
    <>
    <Sidebar/>
    <Outlet/>
    </>
  )
}

export default Stickywall