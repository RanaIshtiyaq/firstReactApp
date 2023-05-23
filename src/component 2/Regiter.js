import React,{useState} from "react";
function Regiter(){
    const [formData,setFormData]=useState({
      name:'',
      email:'',
      password:'',
    });
  const handleChange=(e)=>{
  setFormData({...formData, [e.target.name]:e.target.value,[e.target.email]:e.target.value,[e.target.password]:e.target.value});
  }
  const handleSubmit=(e)=>{
  e.preventDefault();
  alert(JSON.stringify(formData));
  }
    return(
<div>
<form name="myForm" onSubmit={handleSubmit} class='text-start m-2'>
  <div class="form-group m-2">
    <label for="name" class="align-left">Enter Name</label>
    <input type="text" class="form-control" onChange={handleChange} name="name" value={formData.name} id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
  </div>
  <div class="form-group m-2">
    <label for="exampleInputEmail1" class="align-left">Email address</label>
    <input type="email" class="form-control" onChange={handleChange} name="email" value={formData.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group m-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" onChange={handleChange} value={formData.password} class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit"  class="btn btn-primary m-2">Submit</button>
</form>
</div>
    );
}
export default Regiter