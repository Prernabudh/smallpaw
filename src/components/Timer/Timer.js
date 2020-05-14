import React from 'react';
import "./Timer.css"
import Submit from "./Submit/Submit"

var countDownDate = new Date("June 15, 2020 15:37:25").getTime();
var x = setInterval(function() {

var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
const Timer = () =>{
    return(
        <div className="first-div">
            <div className="brand">
                <img src="./Logo.png" className="logo"></img>
                <img src="./title.png" className="title"></img>
            </div>
            <div className="countdown-timer">
                <div id="demo">
                    <div id="day" className="time"></div>
                    <div id="hour" className="time"></div>
                    <div id="min" className="time"></div>
                    <div id="sec" className="time"></div>
                    <div className="times">Days</div>
                    <div className="times">Hours</div>
                    <div className="times">Mins</div>
                    <div className="times">Secs</div>
                </div>
            </div>
            <div className="caption">COMING SOON!</div>
            <p>Join our community for pawsome experience</p>
            <Submit/>
        </div>
    )
}

export default Timer