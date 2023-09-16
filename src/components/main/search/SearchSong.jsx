import React from 'react';
import styles from "./SearchSong.css";
import {BiSearchAlt2} from "react-icons/bi"
import {MdOutlineCancel} from "react-icons/md"

const SearchSong = () => {
  return (
    <div className='searchbar-container'>
    <div className='input-wrap'>
      <BiSearchAlt2 className="search-icon"/>
      <label for="product-search" id="input-label">Music Search</label>
      <input 
        type="text" 
        name="music-search" 
        id="music-search" 
        placeholder="Search Artist, Song, Album"
      />
      <MdOutlineCancel className="search-icon"/>
    </div>
  </div>
  )
}

export default SearchSong