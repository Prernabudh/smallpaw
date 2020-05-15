import React from "react"
import "./Footer.css"
import linkedin from "./images/linkedin.png"
import insta from "./images/insta.png"

const Footer =() =>{
    return(
        <div className="footer-container">
            <p className="footer-text">Follow us on</p>
            <center>
                <img src={linkedin} className="linkedin"></img>
                <img src={insta} className="insta"></img>
            </center>
        </div>
    )
}

export default Footer;