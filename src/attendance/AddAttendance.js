import React, { useEffect, useState } from "react";
import { Upload, message } from "antd";
import { Firestore, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const db = getFirestore();

function AddAttendance() {
  const [name, setName] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [rollno, setRolno] = useState("");
  const [documents, setDocuments] = useState([]);

  const id = Math.random().toString(36).slice(2); // Fixed the random ID generation

  const upload = async (e) => {
    e.preventDefault();
    if (!name || !rollno || !checkbox) {
      message.error("Fill Required Fields");
    } else {
      await setDoc(doc(db, "ATTENDANCE", id), {
        id: id,
        name: name,
        RollNo: rollno,
        Checkbox: checkbox,
      });
      message.success("Attendance uploaded Successfully");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="card w-75 py-5 ms-5 mt-5">
              <form>
                <h1 className="text-center mt-2 mb-3">Upload Attendance</h1>
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
                    placeholder="Roll No"
                    required
                    onChange={(e) => {
                      setRolno(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <select
                    className="form-control w-25"
                    onChange={(e) => setCheckbox(e.target.value)}
                  >
                    <option value={"present"}>Present</option>
                    <option value={"absent"}>Absent</option>
                  </select>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    className="w-50 bg-primary form-control"
                    onClick={upload}
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
        <Link to="/getattendance">
          <button
            type=""
            className="ms-5 mt-3 bg-dark form-control w-25 text-white"
          >
            View Attendance
          </button>
        </Link>
      </div>
    </>
  );
}

export default AddAttendance;
