// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
 import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
     
//   BrowserRouter as Router,
  
//   Route,
//   Routes,
// link,
 } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');//Whether Dark Mode is enabled or not
  const [alert, setalert] = useState(null)
  const showalert = (message,type) =>{

  }
   const toggleMode=()=>{
  if (Mode === "light") {
    setMode = ("dark");
  }
  else {
    setMode = ("light");
  }
}
  return (
  
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      

               
           {/* <Routes> */}
             {/* <Route exact path="/about" element={<About/>} > */}

             {/* </Route> */}

             {/* <Route exact path="/home" */}
             {/* element=  */}
             {<TextForm showAlert={showalert} heading="Enter your text to Analyse below" mode={Mode}/>}

          {/* //   </Route>
          // </Routes> */}


      </div>


      {/* // </Router> */}

    </>
  );
}

export default App;
