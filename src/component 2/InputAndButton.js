import React,{useState} from "react";
export default function InputAndButton(){
    const [Val, SetVal]=useState('0');
    function InputChange(){
        SetVal(Val)
    }
   
    return(
      
<div ColorDropdownMenue="App">
<hr />
<h1 class=' text-right'>Result:{Val}</h1>
<div class=' row'>
  
  <div class='col-4 moveTop'>
    </div>
  <div class='col-2'>
<input type="text" name="input" value={Val}  class="form-control" />
  </div>
  <div class='col-2'>
  
<button class='btn btn-success' onClick={InputChange}>Click</button>
  </div>
</div>
<div class='col-2'>

</div>

</div>

    );
}