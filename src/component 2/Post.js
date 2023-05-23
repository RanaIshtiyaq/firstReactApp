import React, { useState } from "react";
import axios from "axios";
function Post(){
    const [number,setNumber1]=useState('');
    const [output,setOutput]=useState("");
    const apiCall = async () => {
        if(!number){
            return alert("wrong");
        }
        const response= await axios.get(`http://localhost:4000/message/${number}`);
        setOutput(response.data);
    }
    return(
<div>
  <div class="form-group m-2">
    <label for="name" class="align-left">Enter Name</label>
    <input type="text" class="form-control" onChange={(e)=> setNumber1(e.target.value)} name="number"  id="name"  placeholder="Enter Name" />
  </div>
  <button type="submit"  class="btn btn-primary m-2" onClick={apiCall}>Submit</button>
<div className="alert alert-primary mt-3">{output.msg}</div>
</div>
    )};
    export default Post;