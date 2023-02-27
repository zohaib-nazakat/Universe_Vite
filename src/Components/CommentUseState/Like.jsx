import React, { useState } from "react";
import "../Style/Home.css";


function Like() {

    const [like, setlike] = useState(1);
    const [dislike, setdislike] = useState(1);
    const [likeactive, setlikeactive] = useState(false);
    const [dislikeactive, setdislikeactive] = useState(false);



    function likef() {
        if (likeactive) {
          setlikeactive(false);
          setlike(like - 1);
          document.getElementById("fas").style.color = "black";
        } else {
          setlikeactive(true);
          setlike(like + 1);
          document.getElementById("fas").style.color = "blue";
    
          if (dislikeactive) {
            setdislikeactive(false);
            setlike(like + 1);
            setdislike(dislike - 1);
            document.getElementById("fas1").style.color = "black";
          }
        }
      }

      function dislikef() {
        if (dislikeactive) {
          setdislikeactive(false);
          setdislike(dislike - 1);
          document.getElementById("fas1").style.color = "black";
        } else {
          setdislikeactive(true);
          setdislike(dislike + 1);
          document.getElementById("fas1").style.color = "red";
    
          if (likeactive) {
            setlikeactive(false);
            setdislike(dislike + 1);
            setlike(like - 1);
            document.getElementById("fas").style.color = "black";
          }
        }
      }
    
      
  return (
        <>
        <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="like_btn left-button post-button border-0 text-black p-1 bg-white"
                    >
                      <i
                        onClick={() => {
                          likef();
                        }}
                        className="fa-solid fa-thumbs-up"
                        id="fas"
                      >
                        {like}
                      </i>
                    </button>
                    <button
                      type="button"
                      className="left-button post-button border-0 text-black p-1 bg-white"
                    >
                      <i
                        onClick={() => {
                          dislikef();
                        }}
                        className="fa-solid fa-thumbs-down"
                        id="fas1"
                      >
                        {dislike}
                      </i>
                    </button>
                  </div>









                  
        </>
    )
}

export default Like;