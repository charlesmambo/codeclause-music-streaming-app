import React, {useState} from 'react';
import { MdLocalLibrary } from 'react-icons/md';
import { HiCloudDownload } from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';

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
    </div>
  )
}

