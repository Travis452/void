import "./post.css"
import React from "react"
import {downloadTxtFile} from "./downloadTxtFile.js"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
export default function Post(){
    return (
        <div className="post">
          <div className="postWrapper">
           <div className="postTop">
            <div className="posTopLeft">
                <img className="postProfileImg" src="images/profilepic.jpeg" alt="" />
                <span className="postUsername">Rob Snyder</span>
                <span className="postTime">1 hour ago</span> 
            </div>
            <div className="postTopRight"></div>
            </div>
           <div className="postCenter">
            <span className="postText"> Hey this is my project its a beat i made in 15 seconds</span>
           </div>
           <div className="postBottom">
            <div className="postBottomLeft">
            <LocalFireDepartmentIcon />
                
            </div>
            <div className="postBottomRight">
            <button id="downloadBtn" onClick = {downloadTxtFile} value="download">Download</button>
                <span className="downloadCounter">50 downloads</span> 
            </div>
           </div>
          </div>  

        </div>
    )
}



