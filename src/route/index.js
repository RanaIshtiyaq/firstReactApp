import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "../component 2/AppBar";
import About from "../component 2/About";
import Home from "../component 2/Home";
import Regiter from "../component 2/Regiter";
import FormikForm from "../component 2/FormikForm";
import Post from "../component 2/Post";
 
// import Post f
export default function index() {
    return (
        <div>
<BrowserRouter>
<Routes>
    <Route exact path="/" Component={AppBar}/>
    <Route path="/home" Component={Home}/>
    <Route path="/post" Component={Post}/>
    <Route path="/about" Component={About}/>
    <Route path="/regiter" Component={Regiter} />
    <Route path="/formik" Component={FormikForm} />

</Routes>
 </BrowserRouter>
      
        </div>
    )
}