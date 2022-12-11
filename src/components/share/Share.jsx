import React from "react"
import "./share.css"
import Button from '@mui/material/Button';
export default function Share(){
    return(

    <div className="share">
    
<div className = "shareWrapper">
    <div className = "shareTop">
    <img className = "shareProfileImage" src ="images/profilepic.jpeg" alt = "Profile pictur" />
        <input placeholder="Describe your project"
        className = "shareInput"/>
        </div>
    <hr className = "shareHr"/>
    <div className = "shareBottom">
    <Button className = "uploadButton"  variant= "contained" color = "secondary" component="label">
    <img className="void-img-upload" src="https://cdn-icons-png.flaticon.com/512/190/190279.png" alt = ""/>
  <input hidden accept="image/*" multiple type="file" />
</Button>
    </div>
</div>
    </div>
    )
}