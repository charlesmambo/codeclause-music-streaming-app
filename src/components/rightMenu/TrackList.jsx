import React from 'react';
import artistImg from "../../assets/sia.png";
import {AiFillLike} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";
import {CgPlayListAdd} from "react-icons/cg";
import {IoIosSkipBackward} from "react-icons/io";
import {FiPauseCircle} from "react-icons/fi";
import {IoIosSkipForward} from "react-icons/io";
import {HiVolumeUp} from "react-icons/hi";

const TrackList = () => {
  return (
    <div>
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
                <input className="volume-bar" type="range"/>
             </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export {TrackList}