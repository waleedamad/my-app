import React, { useState,useEffect } from 'react'
import { Firestore, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import {  deleteDoc,updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';



const db = getFirestore();
function Getdata() {
    const [documents,setDocuments]=useState([])

    const readData=async()=>{
        const querySnapshot = await getDocs(collection(db, "USERDATA"));
        let array=[]
querySnapshot.forEach((doc) => {
  
  let data=doc.data()
  array.push(data)

});
setDocuments(array)
console.log(documents)
    }
    useEffect(()=>{
        readData()
        
},[]
    )


    const handledelete=async(id)=>{
        await deleteDoc(doc(db, "USERDATA",id));
    }
  return (
       
    <>
    <div className="table-responsive  d-flex justify-content-center mt-4 " >
    <table class="table  ">
  <thead>
    <tr>
      <th >Sr.No</th>
      <th >Name</th>
      <th >Email</th>
      <th >Phone</th>
      <th >Address</th>
      <th >Action</th>
      <th ></th>
    </tr>
  </thead>
  <tbody>
    {documents.map((doc,i)=>{
        return(
            <tr key={i}>
      <th >{i+1}</th>
      <td>{doc.name}</td>
      <td>{doc.email}</td>
      <td>{doc.phone}</td>
      <td>{doc.address}</td>
      <td ><button type="submit" className="bg-danger form-control" onClick={()=>{
        handledelete(doc.id)
      }}>Delete</button></td>
      
    </tr>
        )
    })}

  </tbody>
</table>
    
</div>
<div class="">
    <Link to="/Addbutton"><button type="" class="ms-5 mt-3 bg-dark form-control w-25 text-white">Go Back</button></Link>
</div>
    </>
  )
}

export default Getdata