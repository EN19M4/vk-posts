import React, { useState } from 'react'
import { Posts } from './Posts';

export const PostsMap = ({posts, postsAll}) => {
const [input,setInput] = useState("");

const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
}
if (input.length > 0) {
        postsAll = postsAll.filter((i) =>{
            return i.body.match(input)
        })
}
else{
    postsAll = posts;
}

    return (
        <div>
               <input type = "text" placeholder = "Find a post" className = "input" onChange = {handleChange} value = {input}></input>
            {
                postsAll.map((posts, index) => (
                <div className = "post" key = {index}>
                    <Posts PostTxt = {posts || postsAll}/>
                </div>
            ))
            } 
        </div>
    )
}
