import React from 'react';
import style from "./Main.css";
import SearchSong from './search/SearchSong';
import MainImg from "../../assets/Music-Streaming-Wars.webp"
import artist from "../../assets/nasty.webp";
import {CgMusicSpeaker} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";

export const Main = () => {
  return (
    <div className='container main-container'>
      <SearchSong />

      {/* ========================================== main content =============================================== */}
      <div className="main-content">
        <div className="main-content-img">
          <img src={MainImg} alt="main image content" />
        </div>


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
              {/* Table data */}
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">waves</td>
                <td className="fixed-width-cell">dean lewis</td>
                <td className="fixed-width-cell">a place we knew</td>
                <td className="fixed-width-cell time">2.58</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">not giving</td>
                <td className="fixed-width-cell">tom walker</td>
                <td className="fixed-width-cell">what a time to be alive</td>
                <td className="fixed-width-cell time">3.50</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">i just wanna feel something</td>
                <td className="fixed-width-cell">pre_kai_ro</td>
                <td className="fixed-width-cell">mood</td>
                <td className="fixed-width-cell time">2.50</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">warzone</td>
                <td className="fixed-width-cell">bailey zimmerman</td>
                <td className="fixed-width-cell">religiously</td>
                <td className="fixed-width-cell time">3.40</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">no more</td>
                <td className="fixed-width-cell">nasty c</td>
                <td className="fixed-width-cell">i love it here</td>
                <td className="fixed-width-cell time">3.20</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">under the influence</td>
                <td className="fixed-width-cell">chris brown</td>
                <td className="fixed-width-cell">indigo</td>
                <td className="fixed-width-cell time">4.00</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">018</td>
                <td className="fixed-width-cell">casper nyovest</td>
                <td className="fixed-width-cell">solomon</td>
                <td className="fixed-width-cell time">4.13</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>

              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">snooze</td>
                <td className="fixed-width-cell">SZA</td>
                <td className="fixed-width-cell">Sos</td>
                <td className="fixed-width-cell time">3.25</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              {/* Add more rows for other songs here */}

              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">waves</td>
                <td className="fixed-width-cell">dean lewis</td>
                <td className="fixed-width-cell">a place we knew</td>
                <td className="fixed-width-cell time">2.58</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">not giving</td>
                <td className="fixed-width-cell">tom walker</td>
                <td className="fixed-width-cell">what a time to be alive</td>
                <td className="fixed-width-cell time">3.50</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">i just wanna feel something</td>
                <td className="fixed-width-cell">pre_kai_ro</td>
                <td className="fixed-width-cell">mood</td>
                <td className="fixed-width-cell time">2.50</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
              <tr className='trending-artist-song'>
                <td className="fixed-width-cell">warzone</td>
                <td className="fixed-width-cell">bailey zimmerman</td>
                <td className="fixed-width-cell">religiously</td>
                <td className="fixed-width-cell time">3.40</td>
                <td>
                  <AiOutlinePlus className='artist-icon space-icon' />
                  <BsThreeDots className='artist-icon' />
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
        <div className="main-controller">
            <div className="card">II</div>
        </div>
      </div>
    </div>
  )
}

