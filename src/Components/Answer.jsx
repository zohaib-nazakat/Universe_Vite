import React from "react";
import NavBar from "../Navbar";
import Style from "./Style/Answer.module.css";
import Footer from "./Footer";
function Answer() {
  return (
    <>
      <NavBar />
      <br />
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div className={`  bg-white  ${Style.border}`}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <span>
                  <i className={`fa-solid fa-star ps-4 ${Style.Ans_icon}`}></i>
                </span>
                <div className="d-flex flex-column">
                  <h6 className={`${Style.Ans_p}`}>Questions for you</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ````````````` Answer Div ````````````````````` */}
      <div className="row" id="first_div">
        <div className="col-3"></div>
        <div className="col-6">
          <div className={`  bg-white ${Style.border}`}>
            <div>
              <div >
                <span>
                </span>
                
                <div className="d-flex flex-column">
                
                  <h6 className={`${Style.Ans_question}`}><a href="/#" ><strong> How would you print an upside-down triangle in Python?</strong></a>
                  <button className="btn rounded-circle hover-dark p-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        
                      >
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                      </svg>
                    </button>
                  
                  </h6>
                  <h6 className={`${Style.Ans_title}`}><a href="/#" ><strong> No answer yet ·</strong></a> <span className={`${Style.time}`}>Last requested 7m</span></h6>

                    <div className="mb-3">
                  <button className={`btn btn-white btn-md w-25 border border-1 rounded-pill ms-3 ${Style.button}`}>  <span><i class="fa-solid fa-pencil"></i></span> Answer</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-wifi"></i></span> Follow</button>
                  <button className={`btn btn-white btn-md w-25 rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-pencil"></i></span>  Pass</button>
                  <button  className="button_vote rounded-pill btn"><span><i className={`rounded-pill fa-solid fa-arrow-down  ${Style.button_vote}`}></i></span></button>
                    </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ````````````` Answer Div ````````````````````` */}
      <div className="row" id="first_div">
        <div className="col-3"></div>
        <div className="col-6">
          <div className={`  bg-white ${Style.border}`}>
            <div>
              <div>
                <span>
                </span>
                <div className="d-flex flex-column">
                  <h6 className={`${Style.Ans_question}`}><a href="/#" ><strong> How would you print an upside-down triangle in Python?</strong></a>
                  <button className="btn rounded-circle hover-dark p-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        
                      >
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                      </svg>
                    </button>
                  </h6>
                  <h6 className={`${Style.Ans_title}`}><a href="/#" ><strong> No answer yet ·</strong></a> <span className={`${Style.time}`}>Last requested 7m</span></h6>

                    <div className="   mb-3">
                  <button className={`btn btn-white btn-md w-25 border border-1 rounded-pill ms-3 ${Style.button}`}>  <span><i class="fa-solid fa-pencil"></i></span> Answer</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-wifi"></i></span> Follow</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-pencil"></i></span>  Pass</button>
                  <button  className="button_vote rounded-pill btn"><span><i className={`rounded-pill fa-solid fa-arrow-down  ${Style.button_vote}`}></i></span></button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ````````````` Answer Div ````````````````````` */}
      <div className="row" id="first_div">
        <div className="col-3"></div>
        <div className="col-6">
          <div className={`  bg-white ${Style.border}`}>
            <div>
              <div>
                <span>
                </span>
                <div className="d-flex flex-column">
                  <h6 className={`${Style.Ans_question}`}><a href="/#" ><strong> How would you print an upside-down triangle in Python?</strong></a>
                  <button className="btn rounded-circle hover-dark p-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        
                      >
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                      </svg>
                    </button>
                  </h6>
                  <h6 className={`${Style.Ans_title}`}><a href="/#" ><strong> No answer yet ·</strong></a> <span className={`${Style.time}`}>Last requested 7m</span></h6>

                    <div className=" mb-3">
                  <button className={`btn btn-white btn-md w-25 border border-1 rounded-pill ms-3 ${Style.button}`}>  <span><i class="fa-solid fa-pencil"></i></span> Answer</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-wifi"></i></span> Follow</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-pencil"></i></span>  Pass</button>
                  <button  className="button_vote rounded-pill btn"><span><i className={`rounded-pill fa-solid fa-arrow-down  ${Style.button_vote}`}></i></span></button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ````````````` Answer Div ````````````````````` */}
      <div className="row" id="first_div">
        <div className="col-3"></div>
        <div className="col-6">
          <div className={`  bg-white ${Style.border}`}>
            <div >
              <div >
                <span>
                </span>
                <div className="d-flex flex-column">
                  <h6 className={`${Style.Ans_question}`}><a href="/#" ><strong> How would you print an upside-down triangle in Python?</strong></a>
                  <button className="btn rounded-circle hover-dark p-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        
                      >
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                      </svg>
                    </button>
                  </h6>
                  <h6 className={`${Style.Ans_title}`}><a href="/#" ><strong> No answer yet ·</strong></a> <span className={`${Style.time}`}>Last requested 7m</span></h6>

                    <div className="   mb-3">
                  <button className={`btn btn-white btn-md w-25 border border-1 rounded-pill ms-3 ${Style.button}`}>  <span><i class="fa-solid fa-pencil"></i></span> Answer</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-wifi"></i></span> Follow</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-pencil"></i></span>  Pass</button>
                  <button  className="button_vote rounded-pill btn"><span><i className={`rounded-pill fa-solid fa-arrow-down  ${Style.button_vote}`}></i></span></button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ````````````` Answer Div ````````````````````` */}
      <div className="row" id="first_div">
        <div className="col-3"></div>
        <div className="col-6">
          <div className={`  bg-white ${Style.border}`}>
            <div>
              <div>
                <span>
                </span>
                <div className="d-flex flex-column">
                  <h6 className={`${Style.Ans_question}`}><a href="/#" ><strong> How would you print an upside-down triangle in Python?</strong></a>
                  <button className="btn rounded-circle hover-dark p-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        
                      >
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                      </svg>
                    </button>
                  </h6>
                  <h6 className={`${Style.Ans_title}`}><a href="/#" ><strong> No answer yet ·</strong></a> <span className={`${Style.time}`}>Last requested 7m</span></h6>

                    <div className=" mb-3">
                  <button className={`btn btn-white btn-md w-25 border border-1 rounded-pill ms-3 ${Style.button}`}>  <span><i class="fa-solid fa-pencil"></i></span> Answer</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-wifi"></i></span> Follow</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-pencil"></i></span>  Pass</button>
                  <button  className="button_vote rounded-pill btn"><span><i className={`rounded-pill fa-solid fa-arrow-down  ${Style.button_vote}`}></i></span></button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      {/* ````````````` Answer Div ````````````````````` */}
      <div className="row" id="first_div">
        <div className="col-3"></div>
        <div className="col-6">
          <div className={`  bg-white ${Style.border}`}>
            <div>
              <div>
                <span>
                </span>
                <div className="d-flex flex-column">
                  <h6 className={`${Style.Ans_question}`}><a href="/#" ><strong> How would you print an upside-down triangle in Python?</strong></a>
                  <button className="btn rounded-circle hover-dark p-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        
                      >
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                      </svg>
                    </button>
                  </h6>
                  <h6 className={`${Style.Ans_title}`}><a href="/#" ><strong> No answer yet ·</strong></a> <span className={`${Style.time}`}>Last requested 7m</span></h6>

                    <div className=" mb-3">
                  <button className={`btn btn-white btn-md w-25 border border-1 rounded-pill ms-3 ${Style.button}`}>  <span><i class="fa-solid fa-pencil"></i></span> Answer</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-wifi"></i></span> Follow</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-pencil"></i></span>  Pass</button>
                  <button  className="button_vote rounded-pill btn"><span><i className={`rounded-pill fa-solid fa-arrow-down  ${Style.button_vote}`}></i></span></button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      
      {/* ````````````` Answer Div ````````````````````` */}
      <div className="row" >
        <div className="col-3"></div>
        <div className="col-6" id="last__div">
          <div className={`  bg-white ${Style.border}`}>
            <div>
              <div>
                <span>
                </span>
                <div className="d-flex flex-column">
                  <h6 className={`${Style.Ans_question}`}><a href="/#" ><strong> How would you print an upside-down triangle in Python?</strong></a>
                  <button className="btn rounded-circle hover-dark p-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        
                      >
                        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                      </svg>
                    </button>
                  </h6>
                
                  
                  <h6 className={`${Style.Ans_title}`}><a href="/#" ><strong> No answer yet ·</strong></a> <span className={`${Style.time}`}>Last requested 7m</span></h6>

                    <div className=" mb-3">
                  <button className={`btn btn-white btn-md w-25 border border-1 rounded-pill ms-3 ${Style.button}`}>  <span><i class="fa-solid fa-pencil"></i></span> Answer</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-wifi"></i></span> Follow</button>
                  <button className={`btn btn-white btn-md w-25  rounded-pill ${Style.button}`}> <span><i class="fa-solid fa-pencil"></i></span>  Pass</button>
                  <button  className="button_vote rounded-pill btn"><span><i className={`rounded-pill fa-solid fa-arrow-down  ${Style.button_vote}`}></i></span></button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      

      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      
      {/* `````````````````````````````````````````````````````````````````````````````````````````````````````` */}
      
      <Footer/>
    </>
  );
}

export default Answer;
