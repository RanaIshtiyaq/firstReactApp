import React,{useState, useEffect} from "react";
import axios from "axios";
export default function FetchApi(){
    const[Posts, setPost]=useState([]);
useEffect(()=>{
    const FetchPOst=async()=>{
        try{
            const response=await axios.get('https://jsonplaceholder.typicode.com/users');
            setPost(response.data);
        }
        catch(error){
            console.error("Error in post", error)
        }
    };
    FetchPOst();
},[]);
    return(
        <div class='container'>
            <h2>User List</h2>
            {/* {console.log(Posts)} */}
            <table class='table table-striped'>
            <thead class='bg-dark text-white'>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Phone</td>
                <td>Website</td>
                <td>Company</td>
            </thead>
            <tbody>
      {Posts.map(post=>(
        <tr>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>{post.address.street}, {post.address.city}</td>
            <td>{post.phone}</td>
            <td>{post.website}</td>
            <td>{post.company.name}</td>
        </tr>
      ))}
      </tbody>
      </table>
        </div>
    )
}
