import React, { useEffect, useState } from "react";
import axios from "axios";
const Filedata = () => {
    const [selectdata, setSelectData] = useState([]);

    useEffect(()=> {
        const newdata = async () => {
            const response = await axios.get("http://localhost:4000/users")
            setSelectData(response.data)
        }
        newdata()
    },[])
    return(
        <div>
             <h2>User List</h2>
            {/* {console.log(Posts)} */}
            <table class='table table-striped'>
            <thead class='bg-dark text-white'>
                <td>Name</td>
                <td>F Name</td>
                <td>Roll</td>
                <td>Adress</td>
            </thead>
            <tbody>
      {selectdata.map(post=>(
        <tr>
            <td>{post.name}</td>
            <td>{post.fname}</td>
            <td>{post.roll}</td>
            <td>{post.address}</td>
        </tr>
      ))}
      </tbody>
      </table>

        </div>
    )
}
export default Filedata;