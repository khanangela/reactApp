import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import swal from 'sweetalert';



const Contact =() =>{

  const [data, setData] = useState({
      fulname : "",
      phone :"",
      email: "",
      msg: ""
  });


    const InputEvent =(event) =>{
       const {name , value} = event.target;

       setData((preValue) =>{
           return {
              ...preValue,
              [name ] : value
           }
       })
    }
    const formSubmit =(e) =>{
        e.preventDefault();
        swal("Congraturaltions!", "form submitted successfully" , "success");
      
        


    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Get In Touch</h1>
            </div>
            <div className='container contact_div'>
                 <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                              <form onSubmit = {formSubmit} >
                              <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name ="fulname" value ={data.fulname} onChange={InputEvent} placeholder="Enter Your Full Name" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  name ="email" value ={data.email} onChange={InputEvent} placeholder="name@example.com" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name ="phone" value ={data.phone} onChange={InputEvent} placeholder="Enter your Phone number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control"  name ="msg" value ={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>


<div className='col-12'>
    <button className='btn contact-btn' type='submit'>Submit</button>
</div>

                              </form>
                    </div>
                 </div>
            </div>
        </>
    )
}


export default Contact;