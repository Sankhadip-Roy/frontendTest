import './App.css';
import Nav from './components/Nav';
import Forms from './components/Forms';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import { useState } from 'react';
import Alert from './components/Alert';
import Upload from './components/Upload';
import About from './components/About';
import Landing from './components/Landing';

function App() {
  const [alert, setAlert] =  useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  let myStyle = {
    backgroundImage : `url("/farm3.jpg")`,
    height:'200vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
      <div style={myStyle}>
            <Router >
                <Nav/>
                <Alert alert = {alert}/>
                <div className="container" style={{backgroundColor : "white"}}>
                    <Routes>
                          <Route path="/" element = {<Landing/>}/>
                          <Route exact path="/login" element = {<Forms showAlert = {showAlert}/>}/>
                          <Route exact path="/about" element = {<About/>}/>
                          <Route exact path="/upload" element = {<Upload showAlert = {showAlert}/>}/>
                      </Routes>
                  </div>
              </Router>
      </div>
  );
}

export default App;