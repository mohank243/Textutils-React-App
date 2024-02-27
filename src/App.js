
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3c5a87'
      showAlert("success", 'DarkMode has been Enabled')
      document.title = "TextUtils - DarkMode"

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("success", 'LightMode has been Enabled')
      document.title = 'TextUtils - LigthMode'
    }
  } 
  let showAlert = (type , message) =>{
    setAlert({
      type : type,
      message : message
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title='Moresh' about='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container">

      <Routes>
          <Route path="/about"
          element={<About mode={mode} />}/>
        
          <Route path="/"
          element={<TextForm heading='Enter the Text Here' mode={mode} showAlert={showAlert}/>}/>
          
          
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
