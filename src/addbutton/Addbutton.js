import React from 'react'
import { Link } from 'react-router-dom'

function Addbutton() {
  return (
    <>
    <h1 class="text-center mt-5 mb-4">Add New User</h1>
    <div className="ms-5">
    <Link to="/addData"><button  className="bg-primary ms-5 text-white  w-75 p-3 mt-5 form-control">Add User</button></Link>
    </div>
    <h1 class="text-center mt-5 mb-4">View Users</h1>
    <div className="ms-5 mt-5">
    <Link to="/getdata"><button  className="bg-primary ms-5 text-white  w-75 p-3 mt-5 form-control">View Users</button></Link>
    </div>
    
    </>
  )
}

export default Addbutton