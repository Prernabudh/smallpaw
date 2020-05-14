import React from "react"
import "./Image.css"
import component from "./images/component.png"
const Image = () =>{
    return(
        <div><img src={component} className="component-img"></img></div>
    )
}

export default Image