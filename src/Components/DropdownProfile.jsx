import { Link } from "react-router-dom";
import React from "react";
import '../index.css';
import { DriveFileRenameOutline, LocalPostOffice, Login, Person2, PostAdd, QuestionAnswer } from "@mui/icons-material";


const DropDownProfile=()=>{
    return(
        <>
        <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col">
                <li className="hover_Picon"><Link to="/#">Profile <span className="Person2"><Person2/></span></Link></li>
                <li className="hover_Picon"><Link to="/#">UserName  <span className="DriveFileRenameOutline"><DriveFileRenameOutline/> </span> </Link></li>
                <li className="hover_Picon"><Link to="/#">My Posts <span className='space'> <LocalPostOffice/></span></Link></li>
                 

                <li className="hover_Picon"><Link to="/#">My Answers <span className="QuestionAnswer"><QuestionAnswer/></span></Link></li>



                <li className="hover_Picon"><Link to="/#">Logout  <span className="Login"><Login/></span></Link></li>
                
            </ul>
        </div>
        </>
    )
};
export default DropDownProfile;