import React, {useState} from 'react';
import { MdLocalLibrary } from 'react-icons/md';
import { HiCloudDownload } from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
import {RiVipCrownFill } from 'react-icons/ri';
import {MdOutlineSettingsSuggest} from "react-icons/md";
import {MdSettingsInputComponent} from "react-icons/md";
import {IoMdNotifications  } from 'react-icons/io';
import UserImg from "../../assets/user-pic.jpg"

const menuPlaylist = [
    {
        id: 1,
        icon: <MdLocalLibrary/>,
        name: "Your Library"
    },
    {
        id: 2,
        icon: <HiCloudDownload/>,
        name: "your downloads"
    },
    {
        id: 3,
        icon: <AiFillLike/>,
        name: "liked songs"
    }
]



export const LeftMenuPlaylist = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick =  (index) =>{
        setActiveLink(index === activeLink ? null : index)
    }

  return (
    <div>          
        <h4 className='menu-text'>playlist</h4>
        <ul className='rightbar-menu-list playlist-menu-container'>
        {menuPlaylist && menuPlaylist.map((menu, index) => (
          <li key={menu.id} className={`rightmenu-item-list playlist ${index === activeLink ? 'active' : ''}`}>
            <a href="#"  onClick={() => handleLinkClick(index)}
              className={index === activeLink ? 'active' : ''}>
              <i className='global-icon left-icon playlist-icon'>{menu.icon}</i>
              <span className='playlist-span'>{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="user-profile leftmenu-userprofile">
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

