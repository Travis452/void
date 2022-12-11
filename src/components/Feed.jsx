import React from "react"
import Post from "../components/post/Post"
import Share from "../components/share/Share"
import "./feed.css"
export default function Feed(){
    return(
    <div className = "feed"> 
    <div className = "feedWrapper">
        <Share />
        <Post />
    </div>
    
    </div>
    )
}