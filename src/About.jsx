import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import web from "../src/images/img2.svg";
import {NavLink} from "react-router-dom";
import Common from './Common';

const About =() =>{
    return (
        <>

         <Common name= "Welcome To About Page" 
         imgsrc ={web} 
         visit ="/contact"
          btnname = "Contact Us" />
            </>
    )
}


export default About;