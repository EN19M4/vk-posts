import React from 'react'
import Like from "../Like.svg"
import Comm from "../Comm.svg"

export const PostFooter = (commsTotal) => {

    Object.values(commsTotal)
    return (
       <div className = "postFooter">
            <div className = "postBlock">
                <img className = "like-img" src = {Like} alt = "Лайк"></img>
            </div>
            <div className = "postBlock">
                <img className = "comm-img" src = {Comm} alt = "Комменты"></img>
                <span className = "numPost">{commsTotal.commsTotal}</span>
            </div>
        </div> 
    )
}




          

