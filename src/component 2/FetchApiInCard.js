import React,{useState, useEffect} from "react";
import axios from "axios";
export default function FetchApiInCard(){
    const[Posts, setPost]=useState([]);
useEffect(()=>{
    const FetchPOst=async()=>{
        try{
            const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
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
             <div class="row">
            <h2>Posts List</h2>
            {Posts.map(post=>(
                <div class="col-md-4 col-sm-12">
                <div class="card" key={post.id} >
                <div class="card-body">
                <h5 class="card-title cardTitleHeight" >{post.title}</h5>
                <p class="card-text">{post.body}</p>
                </div>
                </div>
                </div>
              

            ))}
             </div>
        </div>
    )
}
