import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Students from './Components/Students';
import ContactUs from './Components/ContactUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import StudentDesc from './Components/StudentDesc';
import AddStudent from './Components/AddStudent';
import { StudentProvider } from './Components/StudentContext';

function App() {
  return (
    <StudentProvider>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/Add-Student" element={<AddStudent/>}/>
          {/* <Route path="/studentDesc" element={<StudentDesc/>}/> */}
          {/* <Route path="/studentDesc/:studentId" element={<StudentDesc/>}/> */}
          <Route path="/contactus" element={<ContactUs/>}/>
         
      </Routes>
    </Router>
    </StudentProvider>
  )
}

export default App

