import React, {useState, useEffect} from 'react';
import Modal from '../Modal/Modal';
import { LastComment } from '../Comments/LastComment';
import axios from 'axios'

export const Posts = ({PostTxt}) => {

    const [comms,setComms] = useState([]);
    let id = PostTxt.id;
    useEffect( () => {
    const getComms = async () => {
    const res = await axios.get('http://localhost:8080/comments')
    setComms(res.data)
    }

    getComms()
  }, []) 

    let commSorted = comms.filter((x) => x.postId === id);

    let commsAllId = commSorted.length; 
    let lastCommId = commSorted.length;
    if (lastCommId !== 0 || undefined){lastCommId--};
    let lastComm = {};
    lastComm = commSorted[lastCommId];
    const [modalActive, setModalActive] = useState(false)
    
    return (
        <>
            <div className = {'overflow_' + modalActive}>
                <h2 className = "postHeader" onClick = {() => setModalActive(true)}>{PostTxt.title}</h2>
                <p className = "postTxt" onClick = {() => setModalActive(true)}>{PostTxt.body}</p>
                <LastComment lastComm = {lastComm} commsAllId = {commsAllId} /> 
            </div>
            <Modal Active = {modalActive} setActive = {setModalActive} TxtTtl = {PostTxt.title} TxtBdy = {PostTxt.body} comms = {commSorted} commsAllId = {commsAllId} id = {id}/> 
        </>
    )
}
