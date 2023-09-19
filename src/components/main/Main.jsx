import React, {useState} from 'react';
import style from "./Main.css";
import SearchSong from './search/SearchSong';
import artist from "../../assets/nasty.webp";
import {CgMusicSpeaker} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
// import {AiOutlinePlus} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";
import { Banner } from './banner/Banner';
import { Songs } from './audio/SongsList';
import { RecomendTracks } from './recomendedTracks/RecomendTracks';

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

         {/* Table headings */}
         <table className="trending-song-list">
          <thead>
            <tr className='treading-song-heading'>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
              <th><CgMusicSpeaker /></th> {/* Icon column */}
            </tr>
          </thead>

          <tbody className='artist-container'>
            {/* Map through the Songs array and generate rows */}
            {Songs.map((song, index) => (
              <tr  key={song.id}  onClick={() => handleLinkClick(index)}  className={`trending-artist-song ${index === activeLink ? 'active' : ''}`}>
                <td className="fixed-width-cell">{song.songName}</td>
                <td className="fixed-width-cell">{song.artist}</td>
                <td className="fixed-width-cell">{song.album}</td>
                <td className="fixed-width-cell time">{song.length}</td>
                <td>
                  {/* <AiOutlinePlus className='artist-icon space-icon' /> */}
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          
         
        </div>
        <div className="main-controller">
           <RecomendTracks />
        </div>
      </div>
    </div>
  )
}

