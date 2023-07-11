import React from "react";
import {NavLink} from "react-router-dom";
import Sdata from "./Sdata";

const Navbar = (props) =>{
  return (  <>
       
  <div className='container-fluid nav_bg'>
      <div className='row'>
          <div className='col-10 mx-auto'>

         
       <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">WebStack <span className="tagline"><em>Learn Web Development</em></span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/service">Htlm5</a></li>
            <li><a class="dropdown-item" href="/service">ReactJs</a></li>
            <li><a class="dropdown-item" href="/service">ReactJs</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Javascript</a></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
 </div>
      </div>
  </div>
    </>
  )
}


export default Navbar;