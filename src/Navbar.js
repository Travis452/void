import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return <nav className= "nav">
    <Link to="/Home" className = "site-title"> Void <img className="void-img" src="https://cdn-icons-png.flaticon.com/512/190/190279.png" alt = ""/></Link>
    <ul>
    <CustomLink to= "/Upload" > Upload  </CustomLink>
    <CustomLink to= "/About" > About </CustomLink>
    </ul>
    </nav>
}

function CustomLink({to,children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
      return(
        <li className = {isActive ? "active" : ""}>
        <Link to= {to} 
        {...props}>
        
            {children} 
            </Link>
        </li> 
    )
}