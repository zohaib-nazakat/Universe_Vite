import React, {useState} from 'react';
import '../index.css';
// ``````````````````````
import {Link} from 'react-router-dom';
import DropDownProfile from './DropdownProfile';

// ``````````````````````


function NavBar() {

  const [openProfile, setOpenProfile]= useState(false);
  return (
    
    <>
     <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to="/">Universe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
              <li className="nav-item me-5">
                <Link className="nav-link active" aria-current="page" to="/"><span className='nav_icons'><i class="fa-sharp fa-solid fa-house"></i></span> <b>Home</b></Link>
              </li>
              <li className="nav-item me-5">
                <Link   className="nav-link" to='/NoticeBoard'><span className="nav_icons"><i class="fa-solid fa-graduation-cap"></i>
              </span><b>NoticeBoard</b></Link>
              </li>
              
              <li className="nav-item me-5">
                <Link className="nav-link" to='/LeaderBoard'><span className="nav_icons"><i class="fa-solid fa-trophy"></i></span><b>LeaderBoard</b></Link>
                </li>
                <li className="nav-item me-5 ms-3 dropdown">
                {/* <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="nav_icons"><i class="fas fa-university"></i><b className='department'>Departments</b></span>
                </a>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to='/BSCS'>BSCS</Link>
                  <Link className="dropdown-item" to='/Bba'>BBA</Link>
                  <Link className="dropdown-item" to='/Law'>Law</Link>
                  <Link className="dropdown-item" to='/BSM'>BSM</Link>
                  <Link className="dropdown-item" to='/Bcom'>Bcom</Link>
                 
                </ul>
              </li>
              <div className="d-flex">
              <li className="nav-item login ">
                <Link className="nav-link" to='/Login'>Login</Link>
                </li>
              <li className="nav-item signup">
                <Link className="nav-link" to='/Registration'>SignUp</Link>
                </li>
                {/* onClick={() =>  {likef();}} */}
                <i onClick={() => {setOpenProfile((prev) => !prev);}} class="fa-solid fa-user"></i>
                </div>
            </ul>
           
          </div>
        </div>
      </nav>


      {
        openProfile && <DropDownProfile/>
      }
        
    </>
    
  );
}

export default NavBar;
