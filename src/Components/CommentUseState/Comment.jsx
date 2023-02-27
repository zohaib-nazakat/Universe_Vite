import React, { useState } from "react";
import {  InsertCommentTwoTone, MoreHoriz, ThumbDown, ThumbUpOffAlt } from "@mui/icons-material";
import "../Style/Home.css";

import profile from "../../images/User5.jpg";




const Comment=()=> {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedReply, setIsExpandedReply] = useState(false);
  return (
        <>
        <button 
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
            className="post-button bg-second-color rounded-circle border-0 text-black p-1 bg-white"
              >
            <span> <InsertCommentTwoTone/></span>
           Comment
         </button>



         {isExpanded && (
       
       <div>
               <div className=" bg-light">
               <img className="post-profile rounded-circle" src={profile} alt=""/>
               <input type="text" className="comment_input" placeholder="Add a comment..."/>
               <button type="button" className="btn  btn-sm add_comment">Add comment</button>
               </div>
       
               <div>
                 <div className="comment_head mt-3">
                 <div className="pt-2 d-flex justify-content-between">
                         <div className="d-flex">
                           <img
                             className="post-profile rounded-circle"
                             src={profile}
                             alt=""
                           />
                           <div className="d-flex flex-column">
                             <span className=" text-dark fw-bold fs-6">
                             Earl Vance· Dec 26
                             </span>
                             <span className=" fs-6">How are you Bunny ? What's going on....</span>
                           </div>
                         </div>
       
                         <div className="p-2 text-secondary">
                           <button className="btn rounded-circle hover-dark p-1">
                             <MoreHoriz/>
                           </button>
                         </div>
                         
                       </div>
       
                       <div className="btn-group ms-5" role="group" aria-label="Basic example">
                           <button  class="btn comment_thumb"> <ThumbUpOffAlt/></button>
                           <button  class="btn comment_thumb"> <ThumbDown/></button>
                       </div>
                           <button  class="btn ms-3" onClick={() => setIsExpandedReply(!isExpandedReply)}>  <strong>Reply</strong></button>
       
                           {isExpandedReply && (
                             <div>
                               <input type="text" className="comment_reply" placeholder="Add a comment..."/>
                               <button type="button" className="btn  btn-sm add_comment">Reply</button>
                             </div>
                           )}
                   </div>
               </div>
               
       
       </div>
       
          
        )}
        </>
    )
};

export default Comment;