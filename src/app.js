import React from 'react'
import "./app.css"
import Image from "./components/Image/Image"
import Timer from "./components/Timer/Timer"
import Footer from "./components/Footer/Footer"

const App = () =>{
    return(
        <div className="app">
            <div><Timer/></div>
            <div><Image/></div>
            <div class="contact"><Footer/></div>
        </div>
    )
}

export default App