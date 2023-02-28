import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Style/Home.css";
import ModalStyle from "./Style/modal.module.css";
import profile from "../images/User5.jpg";
import profile2 from "../images/main_page_img/profile2.jpg";
// import profile3 from '../images/main_page_img/profile3.jpg';
import boy1 from "../images/main_page_img/b1.jpg";
import boy2 from "../images/main_page_img/b2.jpg";
import boy3 from "../images/main_page_img/b3.png";
import boy4 from "../images/main_page_img/b4.jpg";
import boy5 from "../images/main_page_img/b5.jpg";
import girl1 from "../images/main_page_img/g1.jpg";
import girl2 from "../images/main_page_img/g2.jpg";
import girl3 from "../images/main_page_img/g3.jpg";
import girl4 from "../images/main_page_img/g4.jpg";
import girl5 from "../images/main_page_img/g5.jpg";
import girl6 from "../images/main_page_img/g6.jpg";
import girl7 from "../images/main_page_img/g7.jpg";
import girl8 from "../images/main_page_img/g8.jpg";
import question from "../images/main_page_img/question.png";
import answer from "../images/main_page_img/pen.png";
import caret from "../images/main_page_img/Caret_right.png";
import Footer from "../Components/Footer";
import Comment from "./CommentUseState/Comment";
import LikeButton from './LikeButton';

import Navbar from "./Navbar";
// import {  DockTwoTone, InsertComment, InsertCommentOutlined, InsertCommentTwoTone, MoreHoriz, ThumbDown, ThumbUpOffAlt } from "@mui/icons-material";

const Home = () => {
  const [like, setlike] = useState(1);
  const [dislike, setdislike] = useState(1);

  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  // const [isExpanded, setIsExpanded] = useState(false);
  // const [isExpandedReply, setIsExpandedReply] = useState(false);

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
      <Navbar />
      <div className="bg-light py-4">
        <div className="container1 mb-5">
          <div className="row">
            {/* ````````````` bottom line is for left side section ````````````` */}
            <div id="left-list" className="col-1 d-flex flex-column"></div>
            {/* ````````````` Upper line is for left side section ````````````` */}

            <div className="col-8 ms-5 mt-5 zohaib">
              {/* ````````` Now start Questions Ask div ``````````` */}
              <div className="bg-white border-gray">
                <div className="row">
                  {/* <div className="col profile">
                                            <img className="post-profile rounded-circle" src={profile3} alt="Reloding" />
                                            <input type="Button" className="w-75 border-gray text-gray-dark rounded-pill bg-light ps-2 text-start" value='What do you want to ask or share ?' />
                                        </div> */}
                </div>
                <div className="row text-gray-darker pb-2 ps-4 pe-4 mt-3 mb-1">
                  <div
                    className="col text-center border-end "
                    style={{ cursor: "pointer" }}
                  >
                    <button
                      type="button"
                      class="btn btn-light w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <img src={question} alt="" width="25px" height="25px" />
                      <span className="text-black ask_clr">Ask</span>
                    </button>

                    {/* ```````````````````````````` Modal Edit Starts from here ```````````````````` */}
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5>Add Question</h5>

                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div
                            class="modal-body pt-3"
                            className={`${ModalStyle.modal__}`}
                          >
                            <div className={`${ModalStyle.modal__Content}`}>
                              <p className={`${ModalStyle.p}`}>
                                {" "}
                                Tips on getting good answers quickly{" "}
                              </p>
                              <ul>
                                <li className={`${ModalStyle.modal__list1}`}>
                                  Make sure your question has not been asked
                                  already
                                </li>
                                <li className={`${ModalStyle.modal__list2}`}>
                                  Keep your question short and to the point
                                </li>
                                <li className={`${ModalStyle.modal__list3}`}>
                                  Double-check grammar and spelling
                                </li>
                              </ul>
                            </div>

                            <div
                              className={`d-flex ${ModalStyle.modal__publicSec}`}
                            >
                              <img
                                className={`rounded-circle ${ModalStyle.modal__pic}`}
                                src={profile}
                                alt=""
                              />
                              <img
                                className="mt-1 ms-1"
                                src={caret}
                                alt="icon"
                                width="25px"
                                height="25px"
                              />
                              <ul className={`${ModalStyle.modal__ul}`}>
                                <li className={`${ModalStyle.publicbtn}`}>
                                  <select
                                    name="modal__select"
                                    className={`${ModalStyle.modal__select}`}
                                  >
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                  </select>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <textarea
                                className={`${ModalStyle.modal__input}`}
                                name="modal__input"
                                id="modal__input"
                                rows="2"
                                placeholder='Start your quetion with "What", "How", "Why", etc.'
                                maxlength="300"
                              ></textarea>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-light"
                              data-bs-dismiss="modal"
                            >
                              Cancle
                            </button>
                            <button
                              type="button"
                              className={`btn ${ModalStyle.modal__btn}`}
                            >
                              Add question
                            </button>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col text-center border-end"
                    style={{ cursor: "pointer" }}
                  >
                    <button type="button" class="btn btn-light w-100">
                      <img src={answer} alt="" width="25px" height="25px" />
                      <span ><Link  className="text-black ans_btn" to='/Answer'>Answer</Link></span>
                    </button>
                  </div>
                </div>
              </div>
              {/* ````````` Now End Ask Questions div ``````````` */}

              {/* ``````````````````` Now Start Post Div ``````````````` */}
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={profile}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Irsa Malik
                      </span>
                      <span className="text-secondary fs-6">irsa12</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: How will computers evolve over the next 100
                      years?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sapiente dolor quod, quae fugit perspiciatis quia excepturi
                    quam quas, cum ipsam aperiam adipisci, at iste. Porro quis
                    modi animi minus facilis explicabo quisquam sed dolorem unde
                    corporis?
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  {/* <div className="btn-group" role="group">
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
                  </div> */}
                  <LikeButton/>
                  <Comment/>

                  {/* <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    type="button"
                    className="post-button bg-second-color rounded-circle border-0 text-black p-1 bg-white"
                  >
                    <span> <InsertCommentTwoTone/></span>
                    Comment
                  </button> */}

                      {/* `````````````````````````` */}
                      <div>
      
      
  </div>
  {/* {isExpanded && (
       
<div>
        <div className=" bg-light">
        <img className="post-profile rounded-circle" src={profile} alt=""/>
        <input type="text" className="comment_input" placeholder="Add a comment..."/>
        <button type="button" className="btn btn-primary btn-sm add_comment">Add comment</button>
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
                        <button type="button" className="btn btn-primary btn-sm add_comment">Reply</button>
                      </div>
                    )}
            </div>
        </div>
        

</div>

   
 )} */}
                      {/* `````````````````````````` */}

                </div>
              </div>
              {/* second */}
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={profile2}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Muhammad Ali
                      </span>
                      <span className="text-secondary fs-6">Ali01</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: What is the difference between AI, Machine
                      Learning and Deep Learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Artificial Intelligence is the concept of creating smart
                    intelligent machines. Machine Learning is a subset of
                    artificial intelligence that helps you build AI-driven
                    applications. Deep Learning is a subset of machine learning
                    that uses vast volumes of data and complex algorithms to
                    train a model
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={boy1}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Zohaib Nazakat
                      </span>
                      <span className="text-secondary fs-6">zabi2701</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      What is the main difference between AI and ML?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    An “intelligent” computer uses AI to think like a human and
                    perform tasks on its own. Machine learning is how a computer
                    system develops its intelligence. One way to train a
                    computer to mimic human reasoning is to use a neural
                    network, which is a series of algorithms that are modeled
                    after the human brain
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={boy2}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Muhammad Rafay
                      </span>
                      <span className="text-secondary fs-6">rafay25</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      What do you mean by machine learning write difference
                      between AI ml and deep learning DL with example?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Machine Learning (ML) is commonly used along with AI but it
                    is a subset of AI. ML refers to an AI system that can
                    self-learn based on the algorithm. Systems that get smarter
                    and smarter over time without human intervention is ML. Deep
                    Learning (DL) is a machine learning (ML) applied to large
                    data sets.
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={boy3}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Muhammad Musharaf
                      </span>
                      <span className="text-secondary fs-6">musharaf002</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      What is the difference between machine learning and deep
                      learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Machine Learning means computers learning from data using
                    algorithms to perform a task without being explicitly
                    programmed. Deep learning uses a complex structure of
                    algorithms modeled on the human brain. This enables the
                    processing of unstructured data such as documents, images,
                    and text.
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={boy4}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Aqib Naeem
                      </span>
                      <span className="text-secondary fs-6">aqi01</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      What is AI and deep learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Artificial Intelligence is the concept of creating smart
                    intelligent machines. Machine Learning is a subset of
                    artificial intelligence that helps you build AI-driven
                    applications. Deep Learning is a subset of machine learning
                    that uses vast volumes of data and complex algorithms to
                    train a model
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={boy5}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">Hussnain</span>
                      <span className="text-secondary fs-6">hani201</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      What are the differences between machine learning and deep
                      learning write with one example application?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Machine learning uses algorithms to parse data, learn from
                    that data, and make informed decisions based on what it has
                    learned. Deep learning structures algorithms in layers to
                    create an “artificial neural network” that can learn and
                    make intelligent decisions on its own. Deep learning is a
                    subset of machine learning.
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={boy1}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Atta Ul Mustafa
                      </span>
                      <span className="text-secondary fs-6">atta12</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: Is deep learning also machine learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Deep learning is a subset of machine learning. It still
                    involves letting the machine learn from data, but it marks
                    an important milestone in AI's evolution. Deep learning was
                    developed based on our understanding of neural networks.
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl1}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Rubab Fatima
                      </span>
                      <span className="text-secondary fs-6">ruby11</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: What are the 2 types of learning in AI?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    AI Learning Models: Knowledge-Based Classification Factoring
                    its representation of knowledge, AI learning models can be
                    classified in two main types: inductive and deductive
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl2}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Iqra Jameel
                      </span>
                      <span className="text-secondary fs-6">iqra03</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: Which is best AI or machine learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    AI is a higher cognitive process. ML permits the system to
                    be told about new things from knowledge. It results in
                    developing a system to mimic humans to retort behave in
                    exceeding circumstances. It involves making self-learning
                    algorithms
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl3}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6"> Ayesha</span>
                      <span className="text-secondary fs-6">ayshu</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: What are the three types of machine learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    The three machine learning types are supervised,
                    unsupervised, and reinforcement learning.
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img3} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              {/* ``Third post```````` */}
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl4}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Maryam Malik
                      </span>
                      <span className="text-secondary fs-6">maryam04</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Is artificial neural network machine learning or deep
                      learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    A neural network is a method in artificial intelligence that
                    teaches computers to process data in a way that is inspired
                    by the human brain. It is a type of machine learning
                    process, called deep learning, that uses interconnected
                    nodes or neurons in a layered structure that resembles the
                    human brain
                  </div>
                </div>
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              {/* ``Fourth post```````` */}
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={boy3}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Waqas Jutt
                      </span>
                      <span className="text-secondary fs-6">jutt12</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      How AI Will Completely Change the Way We Live in the Next
                      20 Years
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sapiente dolor quod, quae fugit perspiciatis quia excepturi
                    quam quas, cum ipsam aperiam adipisci, at iste. Porro quis
                    modi animi minus facilis explicabo quisquam sed dolorem unde
                    corporis?
                  </div>
                </div>
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>

              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl5}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Amna Altaf
                      </span>
                      <span className="text-secondary fs-6">amna56</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: Which algorithm is used in machine learning?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Below is the list of Top 10 commonly used Machine Learning
                    (ML) Algorithms: Linear regression. Logistic regression.
                    Decision tree. SVM algorithm. Naive Bayes algorithm. KNN
                    algorithm. K-means. Random forest algorithm.
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl6}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Raniya Eman
                      </span>
                      <span className="text-secondary fs-6">eman06</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: What are the differences between Ann and DNN?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    ANN consists of one or two hidden layers to process data
                    while DNN mainly contains multiple layers between the input
                    and output layers.
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl7}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">Mariya</span>
                      <span className="text-secondary fs-6">mariya556</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: What are 3 examples of algorithms?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    Common examples include: the recipe for baking a cake, the
                    method we use to solve a long division problem, the process
                    of doing laundry, and the functionality of a search engine
                    are all examples of an algorithm
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>
              <div className="post bg-white border-gray mt-2">
                <div className="pt-2 d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="post-profile rounded-circle"
                      src={girl8}
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className=" text-dark fw-bold fs-6">
                        Aminah Ali
                      </span>
                      <span className="text-secondary fs-6">aminah786</span>
                    </div>
                  </div>

                  <div className="p-2 text-secondary">
                    <button className="btn rounded-circle hover-dark p-1">
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
                  </div>
                </div>

                <div className="post-body pt-2 ps-3">
                  <div className="post-title fw-bold">
                    <a className="text-decoration-none text-black" href="/">
                      Question: Why is algorithm used?
                    </a>
                  </div>
                  <div className="post-text pt-1">
                    An algorithm is a procedure used for solving a problem or
                    performing a computation. Algorithms act as an exact list of
                    instructions that conduct specified actions step by step in
                    either hardware- or software-based routines. Algorithms are
                    widely used throughout all areas of IT
                  </div>
                </div>
                {/* <div className="post-img pt-2">
                                        <img className="image-fluid" width="100%" src={post_img} alt="postImage" />
                                    </div> */}
                <div className="post-footer pt-2 pb-1 ps-2">
                  <LikeButton/>
                  <Comment/>
                </div>
              </div>

              {/* ``````````````````` Now End Post Div ``````````````` */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
