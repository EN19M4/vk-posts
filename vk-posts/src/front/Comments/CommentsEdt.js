import React, {useState} from 'react'
import axios from 'axios'

export const CommentsEdt = ({comms, index}) => {
    const [active, setActive] = useState();
    const [editCommName, setEditCommName] = useState();
    const [editCommBody, setEditCommBody] = useState();
    const updatePost = (_id) => {
        axios.put('http://localhost:8080/update', {name: editCommName, body: editCommBody, _id: _id });
    }

    const deletePost = (_id) => {
        axios.delete(`http://localhost:8080/delete/${_id}`);
    }
    return (
<div className = "comms">
    {active ? 
    (
    <input className = "commInp" type="text" defaultValue = {comms.name} onChange = {e => setEditCommName(e.target.value)}></input>   
    ): (
    <span className = "commHdr">{comms.name}</span> 
    )}
    <span className = "commHdrDlt"><button className = "delete" onClick = {(() => deletePost(comms._id))}>&#10008;</button></span>
    <span className = "commHdrEdt"><button className = "edit" onClick={ e => setActive(true)}>&#9998;</button></span>
    <div className = "brdr-btm-comm"></div>
    {active ? 
    (
    <>
    <input className = "commInp" type="text" defaultValue = {comms.body} onChange = {e => setEditCommBody(e.target.value)}></input> 
    <button className = "editBtn" onClick = {function(e){ setActive(false);updatePost(comms._id)}}>Edit</button>  
    </>
    ): (
    <p className = "commText">{comms.body}</p> 
    )}
</div>
    )
}
