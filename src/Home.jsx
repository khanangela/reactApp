import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import web from "../src/images/img1.svg";
import {NavLink} from "react-router-dom";
import Common from './Common';

const Home =() =>{
    return (
        <>
           <Common name= "Become Master in Web Development" 
         imgsrc ={web} 
         visit ="/service"
          btnname = "Enroll Now" />
        </>
    )
}


export default Home;