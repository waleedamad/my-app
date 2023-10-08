import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/HeaderFolder/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainheader from './MainHeader/Mainheader';
import Home from './Home/Home';
import Contact from './Contact/Contact';

function App() {
  return (
    <div >
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainheader/>}>
      <Route index element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
