import React, {useState} from 'react';
import style from "./Main.css";
import SearchSong from './search/SearchSong';
import artist from "../../assets/nasty.webp";
import {CgMusicSpeaker} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";
import { Banner } from './banner/Banner';
import { Songs } from './audio/SongsList';
import {Audio} from "./audio/Audio"
import { TrackList } from '../rightMenu/TrackList';

export const Main = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick =  (index) =>{
      setActiveLink(index === activeLink ? null : index)
  }

  return (
    <div className='container main-container'>
      <SearchSong />

      {/* ========================================== main content =============================================== */}
      <div className="main-content">
        <Banner />


          {/* ==================================== TRNDING TRACKS ===================================================== */}
          <div className="trending-tracks-container">
            <h4>Trending Tracks <span className='play-style-lines'>----</span></h4>
            <Audio />  
          </div>

        </div>
    </div>
  )
}

