import React from 'react';
import style from "./RightSidebar.css";
import {SiHomebridge} from "react-icons/si";
import {BsMusicPlayerFill} from "react-icons/bs";
import {PiUserCircleBold} from "react-icons/pi";
import {TbFolderHeart} from "react-icons/tb";
import {ImFolderOpen} from "react-icons/im";
import {PiGooglePodcastsLogoFill} from "react-icons/pi";
import {BsUiRadios} from "react-icons/bs";
import {MdLocalLibrary} from "react-icons/md";
import {HiCloudDownload} from "react-icons/hi";
import {AiFillLike} from "react-icons/ai";
import {SiBytedance} from "react-icons/si"
import {FaHeadphones} from "react-icons/fa"

export const RightSidebar = () => {
  return (
    <section>
      <div className="container rightsidebar-container">
        <div className="logo-container">
            <SiBytedance className='logo'/>
            <h2>slugSix</h2>
            <FaHeadphones className='logo'/>
        </div>
          <small>----------------Strong Punch-----------------</small>
        <div className="rightbar-content-container">
          <div className="menus">
          <h4 className='menu-text'>menu</h4>
            <ul className='rightbar-menu-list'>
              <li className='rightbar-item-list'>
                <SiHomebridge className='menu-icon' />
                <a href="">home</a>
              </li>
              <li  className='rightbar-item-list'>
                <BsMusicPlayerFill className='menu-icon'  />
                <a href="">explore</a>
              </li>
              <li  className='rightbar-item-list'>
                <PiUserCircleBold className='menu-icon' />
                <a href="">artist</a>
              </li>
              <li  className='rightbar-item-list'>
                <TbFolderHeart className='menu-icon'/>
                <a href="">genres</a>
              </li>
              <li  className='rightbar-item-list'>
                <ImFolderOpen className='menu-icon'/>
                <a href="">album</a>
              </li>
              <li  className='rightbar-item-list'>
                <PiGooglePodcastsLogoFill className='menu-icon'/>
                <a href="">podcast</a>
              </li>
              <li  className='rightbar-item-list'>
                <BsUiRadios className='menu-icon'/>
                <a href="">radio</a>
              </li>
            </ul>

            <h4 className='menu-text'> playlist</h4>
            <ul className='rightbar-menu-list'>
              <li className='rightbar-item-list'>
                <MdLocalLibrary className='menu-icon'/>
                <a href="">Your Library</a>
              </li>
              <li  className='rightbar-item-list'>
                <HiCloudDownload className='menu-icon'/>
                <a href="">your downloads</a>
              </li>
              <li  className='rightbar-item-list'>
                <AiFillLike className='menu-icon'/>
                <a href="">liked songs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
