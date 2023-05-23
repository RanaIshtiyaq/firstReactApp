import {Form, Formik } from "formik";
import React from "react";
export default function FormikForm(){
    return(
        <>
        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values)=>console.log(values)}
        >
            {({values,handleChange})=>(              
                  <Form class="text-start">
<div class="form-group m-2">
    <label for="name" class="align-left">Enter Name</label>
    <input type="text" class="form-control" onChange={handleChange} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter Name" />
  </div>
  <div class="form-group m-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" onChange={handleChange}  class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit"  class="btn btn-primary m-2">Submit</button>
                </Form>


            )
            
            }
        
        </Formik>
        </>
    );
}