import React from 'react';
import style from "./RightMenu.css";
import artistImg from "../../assets/sia.png";
import {AiFillLike} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";
import {CgPlayListAdd} from "react-icons/cg";
import {IoIosSkipBackward} from "react-icons/io";
import {FiPauseCircle} from "react-icons/fi";
import {IoIosSkipForward} from "react-icons/io";
import {HiVolumeUp} from "react-icons/hi";
import {RiVipCrownFill} from "react-icons/ri";
import {IoMdNotifications} from "react-icons/io";
import {MdOutlineSettingsSuggest} from "react-icons/md";
import {MdSettingsInputComponent} from "react-icons/md";
import UserImg from "../../assets/user-pic.jpg"


export const RightMenu = () => {
  return (
    <div className='container leftsidebar-container'>
      <h4>Now Playing <span className='play-style-lines'>----</span></h4>
      <div className="song-container">
        <img src={artistImg} alt="Artist`s Picture" />

        <div className="song-content">
          <div>
            <h5 className='artist-name'>Sia</h5>
            <p className='song-name'>The greatest</p>
          </div>
      
          <div className="song-content-icons-container">
            <button><CgPlayListAdd />save</button>
            <div className="song-content-icons">
              <AiFillLike className='global-icon'/>
              <BsThreeDots className='global-icon'/>
            </div>      
          </div>
        </div>

        <div className="music-controls">
          <div className="count-down-container">
            <p>1.50</p>
            <p>2.45</p>
          </div>
          <div className="time-container">
            <div className="timebar"></div>
          </div>

          <div className="control-buttons-container">
             <div className="control-buttons">
                <IoIosSkipBackward className='global-icon control-btn-icon' />
                <FiPauseCircle className='global-icon control-btn-icon' />
                <IoIosSkipForward className='global-icon control-btn-icon' />
             </div>

             <div className="volume-control">
                <HiVolumeUp className='global-icon'/>
                <div className="volume-bar-container">
                  <div className="volume-bar"></div>
                  <div className='range'></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="search-tag-container">
        <h4>Search tags <span className='play-style-lines'>----</span></h4>
        <div className="search-tag">
        <a href="">rap</a>
        <a href="">rock</a>
        <a href="">rnb</a>
        <a href="">pop</a>
        <a href="">reggae</a>
        <a href="">jazz</a>
        </div>
      </div>

      <div className="user-profile">
        <div className="premium">
          <RiVipCrownFill className='global-icon user-icon'/>
          <h4>go pro</h4>
        </div>
        <div className="premium">
          <MdOutlineSettingsSuggest className='global-icon user-icon'/>
          <h4>setings</h4>
        </div>

        <div className="premium">
          <MdSettingsInputComponent className='global-icon user-icon'/>
          <h4>...</h4>
        </div>

        <div className="premium user-profile-img-container">
          <img src={UserImg} alt="user`s profile picture" />
          <IoMdNotifications className='global-icon user-icon notification-icon'/>
        </div>
      </div>
    </div>
  )
}
