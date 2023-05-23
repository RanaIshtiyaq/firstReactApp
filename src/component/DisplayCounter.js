import React from "react";
function DispalyCounter({count,name,roll}){
    return(
        <div>
            <div>Dispaly Count:{count}</div>
            <div>Name:{name}</div>
            <div>Roll:{roll}</div>
        </div>
    );
}
export default DispalyCounter;