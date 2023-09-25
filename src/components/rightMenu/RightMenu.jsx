import React from 'react';
import style from "./RightMenu.css";
import {RiVipCrownFill} from "react-icons/ri";
import {IoMdNotifications} from "react-icons/io";
import {MdOutlineSettingsSuggest} from "react-icons/md";
import {MdSettingsInputComponent} from "react-icons/md";
import UserImg from "../../assets/user-pic.jpg"
import { RecomendTracks } from './recomendedTracks/RecomendTracks';


export const RightMenu = () => {
  return (
    <div className='container rightmenu-container'>
      {/* <TrackList /> */}

      <RecomendTracks />
   
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
