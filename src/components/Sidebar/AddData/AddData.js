import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { Firestore, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import App from '../../../App';
import { app } from '../../../config/Firebaseconfig';
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';



const db = getFirestore(app);

function AddData() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [count,setCount]=useState(0)
  const [documents,setDocuments]=useState([])


  const id = Math.random().toString(36).slice(2); // Fixed the random ID generation

  const adduser = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      message.error('Fill Required Fields');
    } else{
        await setDoc(doc(db, "USERDATA", id), {
            id:id,
            name:name ,
            email: email,
            phone: phone,
            address:address
          });
          message.success("Added User Successfully")
          setCount(count+1)
          console.log(count)
    }
  };
   
 

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="card w-75 py-5 ms-5 mt-5">
              <form>
                <h1 className="text-center mt-2 mb-3">Add User</h1>
                <div className="d-flex justify-content-center align-items-center mt-4 mb-3">
                  <input
                    type="text"
                    className="w-75 form-control"
                    placeholder="Student Name"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4 mb-3">
                  <input
                    type="email"
                    className="w-75 form-control"
                    placeholder="Email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <input
                    type="tel"
                    className="w-75 form-control"
                    placeholder="Phone"
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <textarea
                    rows=""
                    cols=""
                    className="w-75 form-control mb-3"
                    placeholder="Address"
                    required
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    className="w-50 bg-primary form-control"
                    onClick={adduser}
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
        <Link to="/Addbutton"><button type="" className="ms-5 mt-3 bg-dark form-control w-25 text-white" >Go Back</button></Link>
         </div>
    </>
  );
}

export default AddData;
