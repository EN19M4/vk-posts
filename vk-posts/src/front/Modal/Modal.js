import React, {useState, useEffect} from 'react';
import { PostComments } from './PostComments';
import axios from "axios";

 

const Modal = ({Active, setActive, TxtTtl, TxtBdy, comms, commsAllId, id}) => {
const [name, setName] = useState();
const [body, setBody] = useState();
const [commAdded, setCommAdded] = useState([]);


useEffect(() => {
    axios.get("http://localhost:8080/read").then((response) =>{
        setCommAdded(response.data)
        
    });

}, []) 

const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        axios.post("http://localhost:8080/insert", {name: name,
            body: body,
            postId: id
        });

    } catch (err) {
        console.log(err);
    }
}
        return (
            <div className = {Active ? 'modal_bkg active' : 'modal_bkg'} onClick = {() => setActive(false)}>
                <div className = {Active ? 'modal_wndw active' : 'modal_wndw'} onClick = {e => e.stopPropagation()}>
                    <div className = "postModals"> 
                        <h2 className = "postHeader" >{TxtTtl}</h2>
                        <p className = "postTxt">{TxtBdy}</p>             
                        <PostComments comms = {comms} commsAllId = {commsAllId} commAdded= {commAdded}/>
                        <form onSubmit = {handleSubmit}>
                        <input className = "addPostInput" type = "text" placeholder = "Write some header..." onChange = {e => setName(e.target.value)}/>
                        <textarea className = "addPostTextArea" type = "text" placeholder = "Write some comment..." onChange = {e => setBody(e.target.value)}/>
                        <button className = "btnSend" type = "submit">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
};

export default Modal;