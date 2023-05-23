import React,{useState} from "react";
import DispalyCounter from "./DisplayCounter";
const Counter = ()=>{
    const [count, setCount]=useState(0);
    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }
    function Reset(){
        setCount(0);
    }

    return(
        <div >
            
           <hr />
            <h4>
                <DispalyCounter count={count} name="ishtiaq" roll="1" />
            </h4>
            <button class="btn btn-danger" onClick={Increment}>Click +</button>
            <button class="btn btn-success" onClick={Decrement}>Click -</button>
            <button class="btn btn-success" onClick={Reset}>Reset</button>
      
        </div>
    );

    }

export default Counter;
