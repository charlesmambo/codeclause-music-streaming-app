import React, { useState, useRef, useEffect } from 'react';
import { Songs } from './SongsList';
import { BsThreeDots } from "react-icons/bs";
import { CgMusicSpeaker } from "react-icons/cg";
import { Playbar } from '../Playbar';




const Audio = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [currentSong, setCurrentSong] = useState(Songs[0]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);


const handleLinkClick = (index) => {
  setActiveLink(index === activeLink ? null : index);
  setCurrentSongIndex(index);
  setCurrentSong(Songs[index]);
};

const playNextSong = () => {
  const nextIndex = (currentSongIndex + 1) % Songs.length;
  setCurrentSongIndex(nextIndex);
  setCurrentSong(Songs[nextIndex]);
};

const playPreviousSong = () => {
  const previousIndex = (currentSongIndex - 1 + Songs.length) % Songs.length;
  setCurrentSongIndex(previousIndex);
  setCurrentSong(Songs[previousIndex]);
};


return (
  <div className='audio-container'>
    {/* Table headings */}
    <table className="trending-song-list">
      <thead>
        <tr className='treading-song-heading'>
          <th>Song</th>
          <th>Artist</th>
          <th className='album-heading'>Album</th>
          <th>Time</th>
          <th className='option-icon'><CgMusicSpeaker /></th> {/* Icon column */}
        </tr>
      </thead>

      <tbody className='artist-container' >
        {/* Map through the Songs array and generate rows */}
        {Songs.map((song, index) => (
          
          <tr
          key={song.id}
          onClick={(e) => {
            handleLinkClick(index);
          }}
          className={`trending-artist-song ${index === activeLink ? 'active' : ''}`}
        >
            <td className="fixed-width-cell">{song.songName}</td>
            <td className="fixed-width-cell at">{song.artist}</td>
            <td className="fixed-width-cell album-name">{song.album}</td>
            <td className="fixed-width-cell time  st">{song.length}</td>
            <td className='song-option-icon'>
              <BsThreeDots className='artist-icon' />
            </td>
          </tr>
        ))}
   
      </tbody>
    </table>

        <Playbar songname={currentSong.song} img={currentSong.imgSrc} artist={currentSong.artist} name={currentSong.songName}  playNextSong={playNextSong}
        playPreviousSong={playPreviousSong} />
    </div>
  )
}

export {Audio}

