import "./intro.scss";
import { init } from "ityped";
import React,{useRef,useState,useEffect} from 'react'



export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500, // delay of 1.5 seconds
            backSpeed:60,
            strings:[" Developer", " Designer", " Content Creator"],

        });
    },[]);
    return (
        <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src={process.env.PUBLIC_URL + "/assets/man.png"} alt="" className="imgcontain" />
          </div>
        </div>


        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Akshay Mayekar</h1>
            <h3>
              Freelance coder 
              <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src={process.env.PUBLIC_URL + "/assets/down.png"} alt="" />
          </a>
        </div>
      </div>
    )
}
