import React from 'react';
import style from './LeftMenu.css';
import { MdLocalLibrary } from 'react-icons/md';
import { HiCloudDownload } from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
import { SiBytedance } from 'react-icons/si';
import { FaHeadphones } from 'react-icons/fa';
import LeftMenuList from './LeftMenuList';
import { Menu } from './Menu';
import { LeftMenuPlaylist } from './LeftMenuPlaylist';


const LeftMenu = () => {
  return (
    <section>
      <div className="container rightmenu-container">
        <div className="logo-container">
          <SiBytedance className='logo' />
          <h2>slugSix</h2>
          <FaHeadphones className='logo' />
        </div>

        <small>----------------Strong Punch-----------------</small>
        <div className="rightbar-content-container">
          <div className="menus">
            <Menu menuObject={LeftMenuList}/>
            <LeftMenuPlaylist />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeftMenu;