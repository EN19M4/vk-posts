import React from 'react'
import { Comments } from '../Comments/Comments' 
import { PostFooter } from './PostFooter';


export const PostComments = ({comms, commsAllId}) => {
    
  
        return (
          
                <div className = "postComments">
                  <PostFooter  commsTotal = {commsAllId}/>
                  <Comments comms = {comms}/>  
                </div>
              )
} 

