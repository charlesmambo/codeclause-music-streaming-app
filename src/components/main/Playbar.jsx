import React, {useState, useRef, useEffect} from 'react';
import artistImg from "../../assets/sia.png";
import {AiFillLike} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";
import {CgPlayListAdd} from "react-icons/cg";
import {IoIosSkipBackward} from "react-icons/io";
import {GoPlay} from "react-icons/go";
import {FiPauseCircle} from "react-icons/fi";
import {IoIosSkipForward} from "react-icons/io";
import {HiVolumeUp} from "react-icons/hi";
import {RiVolumeMuteFill} from "react-icons/ri";
import { Songs } from './audio/SongsList';


const Playbar = ({ songname, img, artist, name, duration, playPreviousSong, playNextSong}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [volume, setVolume] = useState(50);


  //====================================VOLUME BAR ==================================
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
  }

  const handleBarClick = (e) => {
    const bar = e.currentTarget;
    const clickX = e.clientX - bar.getBoundingClientRect().left;
    const barWidth = bar.clientWidth;
    const newVolumePercentage = (clickX / barWidth) * 100;
  
    if (newVolumePercentage > volume) {
      setVolume(newVolumePercentage);
    } else {

      const diff = volume - newVolumePercentage;
      const decreasedVolume = volume - diff;
      setVolume(decreasedVolume);
    }
  };

  const handleVolumeIconClick = () => {
    setIsMute(!isMute);
    setVolume(isMute ? 0 : 50); 
  };

  //=======================================SONG DURATION====================================
  const handleProgressBarClick = (event) => {
    const progressBarRect = progressBar.current.getBoundingClientRect();
    const clickX = event.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const newPercentage = (clickX / progressBarWidth) * 100;
     
    if (newPercentage < 50) {
      const newTime = (newPercentage / 100) * audioDuration;
      audioPlayer.current.currentTime = newTime;
    } else {
      const remainingPercentage = 100 - newPercentage; 
      const newTime = ((remainingPercentage / 100) * audioDuration) + audioPlayer.current.currentTime;
      audioPlayer.current.currentTime = newTime;
    }
  };


  useEffect(() => {
    const audio = audioPlayer.current;  

    const updateInnerBarWidth = () => {
      if (audioDuration > 0) {
        const percentage = (currentTime / audioDuration) * 100;
        progressBar.current.style.width = `${percentage}%`;
      }
    };
  
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
  
    const handleLoadedMetadata = () => {
      setAudioDuration(audio.duration);
    };
  
    audio.addEventListener('timeupdate', () => {
      handleTimeUpdate();
      updateInnerBarWidth();
    });

    const handlePlayPause = () => {
      setIsPlaying(!audio.paused);
    };

    audio.onended = () => {
      setIsPlaying(false); 
      audio.currentTime = 0; 
    };

    //=======================volume=================
    audio.volume = volume / 100;
    
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    progressBar.current.addEventListener('click', handleProgressBarClick);

    //=======================VOLUME EVENTS ================================

    audio.addEventListener("play", handlePlayPause);
    audio.addEventListener("pause", handlePlayPause);


  }, [currentTime, audioDuration]);



 

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  const countdownTime = audioDuration - currentTime;


  const audioPlayer = useRef();
  const progressBar = useRef();

  const playPause = () => {   
    const prevV = isPlaying;
    if(!prevV){
        audioPlayer.current.play()
    }else {
        audioPlayer.current.pause();
    }
    setIsPlaying(!prevV);
  };
  

  return (
    <div className='main-song-container'>
        <div className="main-song-content">
            <div className="main-song-img">
                <img src={img} alt="" />
            </div>
           
        </div>
        <audio className='audio' src={songname} preload='metadata' ref={audioPlayer} />

        <div className="middle-content">
            <div className="song-play">
            <div className="artist-name-song">
                <h5>{artist}</h5>
                <p>{name}</p>
            </div>
            <div className="countdown-time">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(countdownTime)}</span>
            </div>
            </div>
            
            <div className="song-length-container"> 
              <div className="inner-bar" ref={progressBar}></div> 
            </div>

            <div className="controls-container">
                <div className="like-song">
                  <i>
                  <AiFillLike
                  className={`global-icon like-icon ${isLiked ? "active" : ""}`}
                  onClick={() => setIsLiked(!isLiked)}
                  />
                  </i>
                  <i><BsThreeDots className='global-icon like-icon' /></i>
                </div>

               <div className="control-content">
                <IoIosSkipBackward className='global-icon control-icon backward' onClick={playPreviousSong}/>
                <div className="playpause-container" onClick={playPause}>
                  {
                    isPlaying ?(<i><FiPauseCircle className='global-icon control-icon' /></i>) :(<i><GoPlay className='global-icon control-icon'/> </i>)   
                  }
                </div>
                <IoIosSkipForward className='global-icon control-icon forward' onClick={playNextSong}/>
             </div>
             
            
            <div className="volume">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                className="volume-range"
                onChange={handleVolumeChange}
              />
              <div className="icon" onClick={handleVolumeIconClick}>
              <i>
                {isMute ? <HiVolumeUp className='global-icon' /> : <RiVolumeMuteFill className='global-icon' />}
             </i>
              </div>
              <div className="bar-box" onClick={handleBarClick }>
                <div className="bar">
                  <div className="bar-fill" style={{ width: `${volume}%` }}></div>
                </div>
              </div>
            </div>

            </div>
        </div>

    </div>

  )
}



export {Playbar}