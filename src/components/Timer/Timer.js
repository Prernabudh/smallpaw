import React from 'react';
import "./Timer.css"
import Submit from "./Submit/Submit"
import logo from "./images/Logo.png"
import title from "./images/title.png"

var countDownDate = new Date("June 15, 2020 15:37:25").getTime();
var x = setInterval(function() {

var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("day").innerHTML = days;
  if(hours<10)
    document.getElementById("hour").innerHTML = "0"+hours;
  else
    document.getElementById("hour").innerHTML = hours;
  if(minutes<10)
    document.getElementById("min").innerHTML = "0"+minutes;
  else
    document.getElementById("min").innerHTML = minutes;
  if(seconds<10)
    document.getElementById("sec").innerHTML = "0"+seconds;
  else
    document.getElementById("sec").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
const Timer = () =>{
    return(
      <center>
        <div className="first-div">
            <div className="brand">
                <img src={logo} className="logo"></img>
                <img src={title} className="title"></img>
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
            <p className="caption2">Join our community for pawsome experience</p>
            <Submit/>
        </div>
      </center>
    )
}

export default Timer