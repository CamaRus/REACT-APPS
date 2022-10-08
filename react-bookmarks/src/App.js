import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <React.Fragment>
    <FirebaseState>
    <AlertState>
      <Navbar/>
        <div className="container pt-4">
          <Alert/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      </AlertState>
      </FirebaseState>
    </React.Fragment>
  );
}

export default App;
