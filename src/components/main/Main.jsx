import React from 'react';
import style from "./Main.css";
import SearchSong from './search/SearchSong';

export const Main = () => {
  return (
    <div className='container main-container'>
      <SearchSong />
    </div>
  )
}

