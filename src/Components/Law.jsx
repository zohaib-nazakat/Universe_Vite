import React from "react";
import "./Style/Bba.css";
import img from "../images/Used_images/CsDepartment.png";
import img1 from "../images/Law_img/faraz.jpg";
import img2 from "../images/Law_img/saimabutt.jpg";
import img3 from "../images/Law_img/Yasir.jpg";
import Footer from './Footer';

const law = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="true"
        data-bs-interval="5000"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                Department <span>Of Law</span>
              </h5>
              <p>
              The legal education is one of the highest ranking educations in the world. The Department of Law is established in the Punjab University Jhelum Campus...
              </p>

              <div className="slider-btn">
              <a href="#it">
                <button className="btn btn-1" id="btn-clr">
                  
                  Read More
                </button></a>

                <a href="#faculty"><button className="btn btn-2" id="btn-clr">
                  
                  Faculty
                </button></a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                Department <span>Of Law</span>
              </h5>
              <p>
              The legal education is one of the highest ranking educations in the world. The Department of Law is established in the Punjab University Jhelum Campus...
              </p>

              <div className="slider-btn">
              <a href="#it">
                <button className="btn btn-1" id="btn-clr">
                  
                  Read More
                </button></a>

                <a href="#faculty"><button className="btn btn-2" id="btn-clr">
                  
                  Faculty
                </button></a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                Department <span>Of Law</span>
              </h5>
              <p>
              The legal education is one of the highest ranking educations in the world. The Department of Law is established in the Punjab University Jhelum Campus...
              </p>

              <div className="slider-btn">
              <a href="#it">
                <button className="btn btn-1" id="btn-clr">
                  
                  Read More
                </button></a>

                <a href="#faculty"><button className="btn btn-2" id="btn-clr">
                  
                  Faculty
                </button></a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* ````````````````````Section`````````````````````````` */}

      <div className="container">
        <h3 className="read" id="it">
        Department Of LAW
        </h3>
        <p className="read_para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque quam voluptatibus maxime dolorem eligendi quasi aut omnis sunt culpa excepturi, quaerat qui consequuntur iusto consequatur aperiam hic. Numquam corporis fuga est molestias recusandae laborum quia, totam illum minima reiciendis. Dicta quo facere nobis? Animi libero velit quas eius iste quod neque, nostrum fuga, repellat dolorem magnam placeat in voluptates! Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iure quibusdam officiis molestias ad nemo accusamus fuga consectetur eaque voluptas. Illum, nisi cupiditate! Soluta necessitatibus impedit, recusandae consequatur nisi doloribus.
        </p>
        <hr className="mt-5" />
      </div>

      <div className="container">
        <h3 className="read" id="it">
        Requirement
        </h3>
        <p className="read_para">
        Students with F.A./F.Sc./A Levels or equivalent qualification with at least 50% marks and age not more than 24 years are eligible for admission. The admission merit is calculated using weightage of marks obtained in Matric and F.A./F.Sc./A Levels. In case a candidate has passed F.A./F.Sc./A Levels. or equivalent in previous years, 2% marks for each session are deducted from marks obtained out of 100. There are no age and session restrictions in case of students seeking admission to BS program run on self-supporting basis.
        </p>
        <hr className="mt-5" />
      </div>
      <div className="container">
        <h3 className="read" id="it">
        Career
        </h3>
        <p className="read_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil, quasi dolor ea adipisci, eius natus obcaecati quam aperiam autem molestiae fugit delectus qui fugiat, quas repellat. Pariatur laboriosam iusto possimus. Omnis ipsam velit culpa enim? Deserunt iure eius illum veniam suscipit exercitationem nesciunt natus perferendis? Nulla quidem sint dolor saepe voluptatem quam laboriosam libero, iste aperiam a ipsa veritatis.
        </p>
        <hr className="mt-5" />
      </div>
      <div className="container">
        <h3 className="read" id="it">
        Structure
        </h3>
        <p className="read_para">
        The program requirements can normally be completed in eight semesters over four years. The maximum duration for completion of the program is six years. However students exceeding four years will not be treated as regular students and will not be entitled to any facility normally available to regular students such as hostel accommodation, healthcare and transportation.
        </p>
        <hr className="mt-5" />
      </div>
      {/* ````````````````````Faculty`````````````````````````` */}
      {/* <div className="container">
        <h3 className="read" id="faculty">Faculty</h3>
        <div className="container">
        <div className="row">
        <div className="col-4 img-set">
        <img src={img1} alt="CS Department HOD" />
        </div>
        <div className="col-6">
        <h3>Nadia Mumtaz</h3>
        </div>
        </div>
        </div>
        
    </div> */}
      <div className="container">
        <h3 className="read" id="faculty">
          Faculty
        </h3>

        <div className="container d-flex justify-content-between">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>Nadia Mumtaz</h4>
                <h5>Incharge Department</h5>
                <p>
                Ph.D (Scholar) Computer Science, IQRA University</p>
                <p>MS Information Security (NUST) </p>
                <p>MCS, KUST</p>
                <p>Research Interests</p>
                <a href="mailto:nadia.it@pujc.edu.pk">Email Address</a>
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem"}}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>Kamran Shaukat Dar</h4>
                <h5>Lecturer</h5>
                <p>Ph.D Scholar(Computer Science)</p>
                <p>MSCS(Gold medalist)</p>
                <p>BS Computer Science (PUCIT)</p>
                <p>Research Interests</p>
                <a href="mailto:Kamran@pujc.edu.pk">Email Address</a>
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>Muhammad Yasir Kayani</h4>
                <h5>Lecturer</h5>
                <p>Ph.D Scholar (PU) </p>
                <p>LLM, PU Law College  </p>
                <p>LL.B, PU Law College   </p>
                
                
                <br />
                <a href="mailto:yasirkayani@pujc.edu.pk">Email Address</a>
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default law;
