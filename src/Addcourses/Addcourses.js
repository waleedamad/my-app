import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { Firestore, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';



const db = getFirestore();

function Addcourses() {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [coursecode, setCourseCode] = useState('');
  const [documents,setDocuments]=useState([])


  const id = Math.random().toString(36).slice(2); // Fixed the random ID generation

  const addcourse = async (e) => {
    e.preventDefault();
    if (!title || !coursecode  || !description || ! coursecode ||!duration) {
      message.error('Fill Required Fields');
    } else{
        await setDoc(doc(db, "COURSES", id), {
            id:id,
            Title: title,
            Duration: duration,
            Description: description,
            CourseCode:coursecode
          });
          message.success("Added Course Successfully")
    }
  };
   
 

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="card w-75 py-5 ms-5 mt-5">
              <form>
                <h1 className="text-center mt-2 mb-3">Add Courses</h1>
                <div className="d-flex justify-content-center align-items-center mt-4 mb-3">
                  <input
                    type="text"
                    className="w-75 form-control"
                    placeholder="Course Title"
                    required
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4 mb-3">
                  <input
                    type="email"
                    className="w-75 form-control"
                    placeholder="Course Code"
                    required
                    onChange={(e) => {
                      setCourseCode(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <input
                    type="tel"
                    className="w-75 form-control"
                    placeholder="Course Duration"
                    required
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <textarea
                    rows=""
                    cols=""
                    className="w-75 form-control mb-3"
                    placeholder="Description"
                    required
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    className="w-50 bg-primary form-control"
                    onClick={addcourse}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
      <div class="">
        <Link to="/course"><button type="" className="ms-5 mt-3 bg-dark form-control w-25 text-white" >Go Back</button></Link>
         </div>
    </>
  );
}

export default Addcourses;
