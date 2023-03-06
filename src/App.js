// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode,setMode] = useState(`light`);  //Whether dark mode is enabled or not
  const [alert,setAlert] = useState(`null`);  //Whether dark mode is enabled or not
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = "darkgrey";
       showAlert("Dark mode has been enabled", "success");
       document.title = 'Textutils - Dark Mode';

      //  setInterval(() => {
      //   document.title = "Hello";
      //  }, 2000);

      //  setInterval(() => {
      //   document.title = "Hi";
      //  }, 1500);
      }

      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
        document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
       <Navbar title="textutils"  Abouttext="About us" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       {/* <Navbar Abouttext="About us" /> */}
       <div className="container my-3">
        
       {/* <Routes> */}
          {/* <Route path="/about">
            <About/>
          </Route>

          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route> */}

          {/* <Route path="/about"
          element = {<About/>}/> */}

          {/* <Route path="/" */}
         <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* </Routes> */}
       </div>
        {/* </Router> */}
   </>
  );
}

export default App;
