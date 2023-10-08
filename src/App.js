import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar/Sidebar'
import AddData from './components/Sidebar/AddData/AddData';
import Stickywall from './components/Stickywall/Stickywall';
import Getdata from './ReadData/Getdata';
import { Layout } from 'antd';
import Addbutton from './addbutton/Addbutton';
import Addcourses from './Addcourses/Addcourses';
import Courses from './Courses/Courses';
import Readcourse from './readcourse/Readcourse';
import AddAttendance from './attendance/AddAttendance';
import Getattendance from './getattendance/Getattendance';
import { Chart } from 'chart.js';



function App() {
  return (
    <div >
    <BrowserRouter>
    <Layout hasSider>
      <Stickywall/>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
     <Routes>
      {/* <Route path='/' element={}/> */}
      <Route path='/addData' element={<AddData/>}/>
      <Route path='/getdata' element={<Getdata/>}/>
      <Route path='/addbutton' element={<Addbutton/>}/>
      <Route path='/addcourses' element={<Addcourses/>}/>
      <Route path='/course' element={<Courses/>}/>
      
      <Route path='/readcourses' element={<Readcourse/>}/>
      <Route path='/addattendance' element={<AddAttendance/>}/>
      <Route path='/getattendance' element={<Getattendance/>}/>
        <Route path='/charts' element={<Chart/>}/>
      {/* //<Route path='readdata' element={<Getdata/>}/> */}

     </Routes>
     </Layout>
     </Layout>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
