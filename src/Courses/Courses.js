import React from 'react'
import { Link } from 'react-router-dom'

function Courses() {
  return (
    <>
    <h1 class="text-center mt-5 mb-4">Add New Courses</h1>
    <div className="ms-5">
    <Link to="/Addcourses"><button  className="bg-secondary ms-5 text-white  w-75 p-3 mt-5 form-control">Add Course</button></Link>
    </div>
    <h1 class="text-center mt-5 mb-4">View Courses</h1>
    <div className="ms-5 mt-5">
    <Link to="/readcourses"><button  className="bg-secondary ms-5 text-white  w-75 p-3 mt-4 form-control">View Course</button></Link>
    </div>
    
    </>
  )
}

export default Courses