import React from 'react'
import { CommentsEdt } from './CommentsEdt'

export const Comments = ({comms}) => {

    return (
        <div>
            <div className = "brdr-btm" ></div>
            {
            comms.map((comms, index) => (
                <div key = {index}>
                <CommentsEdt comms = {comms} index = {index}/>
                </div>
                ))
            }
        </div>
    )
}

