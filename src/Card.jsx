import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import web from '../src/images/img4.jpg';
import { NavLink } from 'react-router-dom';

const Card =(props) =>{
    return (
        <>
           

           
                       <div className='col-md-4 col-10 mx-auto'>
                       <div class="card">
  <img src= {props.imgsrc} class="card-img-top" alt={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title} </h5>
    <p className="card-text">{props.desc}</p>
    <NavLink to="/contact" className="btn btn-primary servive-btn">Click Here</NavLink>
  </div>

</div>
                       </div>
                  
           </>
    )
}


export default Card;