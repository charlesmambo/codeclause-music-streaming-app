import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import styles from './RecomendedTrack.css';
import img from '../../../assets/tom.jpg';
import img2 from '../../../assets/dean.jpg';
import img3 from '../../../assets/sia.png';
import img4 from '../../../assets/wiz.jpeg';
import img5 from '../../../assets/pre.jpg';

export const RecomendTracks = () => {
  return (
    <div className='recom-container'>
    <h4>Recommended tracks <span className='play-style-lines'>----</span></h4>
  
    <div className="carousel-container">

        <div className="song-card">
          <a href='#'>
            <div className="card-artist-img">
              <img src={img} alt="" />
            </div>
            <i className="playsong-icon">
              <BsFillPlayCircleFill />
            </i>
            <div className="card-artist-content">
              <h3>song name 1</h3>
              <p>artist name 1</p>
            </div>
          </a>
        </div>
        <div className="song-card">
          <a href='#'>
            <div className="card-artist-img">
              <img src={img2} alt="" />
            </div>
            <i className="playsong-icon">
              <BsFillPlayCircleFill />
            </i>
            <div className="card-artist-content">
              <h3>song name 1</h3>
              <p>artist name 1</p>
            </div>
          </a>
        </div>
        <div className="song-card">
          <a href='#'>
            <div className="card-artist-img">
              <img src={img3} alt="" />
            </div>
            <i className="playsong-icon">
              <BsFillPlayCircleFill />
            </i>
            <div className="card-artist-content">
              <h3>song name 1</h3>
              <p>artist name 1</p>
            </div>
          </a>
        </div>
        <div className="song-card">
          <a href='#'>
            <div className="card-artist-img">
              <img src={img4} alt="" />
            </div>
            <i className="playsong-icon">
              <BsFillPlayCircleFill />
            </i>
            <div className="card-artist-content">
              <h3>song name 1</h3>
              <p>artist name 1</p>
            </div>
          </a>
        </div>
        <div className="song-card">
          <a href='#'>
            <div className="card-artist-img">
              <img src={img5} alt="" />
            </div>
            <i className="playsong-icon">
              <BsFillPlayCircleFill />
            </i>
            <div className="card-artist-content">
              <h3>song name 1</h3>
              <p>artist name 1</p>
            </div>
          </a>
        </div>
        <div className="song-card">
          <a href='#'>
            <div className="card-artist-img">
              <img src={img} alt="" />
            </div>
            <i className="playsong-icon">
              <BsFillPlayCircleFill />
            </i>
            <div className="card-artist-content">
              <h3>song name 1</h3>
              <p>artist name 1</p>
            </div>
          </a>
        </div>
    </div>
    </div>
  )
}
