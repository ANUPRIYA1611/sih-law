import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home";
import { Route,Routes } from 'react-router-dom';
import Criminal from './Component/Criminal';
import Loginpage from './Component/Loginpage';
import Signup from './Component/Signup';
import Family from './Component/Family';
import Civil from './Component/Civil';
import Addcase from './Component/Addcase';
import Lawyer from './Component/Lawyer';
import About from './Component/About';
import Chatbox from './Component/Chatbox';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/criminal' element={<Criminal/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/civil' element={<Civil/>} />
        <Route path='/add' element={<Addcase/>} />
        <Route path='/lawyer' element={<Lawyer/>} />
        <Route path='/family' element={<Family/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/chat' element={<Chatbox/>} />
      </Routes>
    </div>
  );
}

export default App;
