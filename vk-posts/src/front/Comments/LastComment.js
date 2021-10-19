import React from 'react'
import { PostFooter } from '../Modal/PostFooter'

export const LastComment = ({lastComm, commsAllId}) => {
    let comms = {};
    if (lastComm !== undefined){comms = lastComm}
    return (
        <>
        <div className = "brdr-btm" ></div>
        <PostFooter  commsTotal = {commsAllId} />    
            <div className = "postComments">
                <div className = "comms">
                            <span className = "commHdr">{comms.name}</span>
                            <div className = "brdr-btm-comm"></div>
                            <p className = "commText">{comms.body}</p> 
                        </div>
            </div>
        </>
    )
}
