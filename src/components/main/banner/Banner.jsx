import React from 'react';
import bannerImg from "../../../assets/Music-Streaming-Wars.webp"
import style from "./Banner.css";
import {BsThreeDots} from "react-icons/bs";
import {MdVerified} from "react-icons/md";
import {BiUserCheck} from "react-icons/bi";
import {CgHeadset} from "react-icons/cg";

const Banner = () => {
  return (
    <div className="main-img">
      <img src={bannerImg} alt="banner image" />

      <div className="banner-content">
        <div className="top-bar">
          <h3>home / <span>famous artist</span></h3>
          <i><BsThreeDots className='top-bar-icon'/></i>
        </div>

        <div className="bottom-bar">
          <div className="left-content">
            <div className="artist">
              <h1>The MooN</h1>
              <i><MdVerified className='verify-icon'/></i>
            </div>
            <div className="streams">
            <p><span className='streams-stat'>1, 223, 100 </span>monthly listeners <CgHeadset /></p>
            </div>
          </div>

          <div className="right-content">
            <a href="#" className='play-btn'>play</a>
            <a href="#" className='follow-btn'><BiUserCheck  className='verify-icon follow-icon'/> following</a>
          </div>
        </div>

      </div>

      <div className="banner-bottom-layer"></div>
    </div>
  )
}

export  {Banner}