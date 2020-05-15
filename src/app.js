import React from 'react'
import "./app.css"
import Image from "./components/Image/Image"
import Timer from "./components/Timer/Timer"
import Footer from "./components/Footer/Footer"

const App = () =>{
    return(
        <div className="app">
            <Timer/>
            <div className="person-img"><Image/></div>
            <div className="contact"><Footer/></div>
        </div>
    )
}

export default App