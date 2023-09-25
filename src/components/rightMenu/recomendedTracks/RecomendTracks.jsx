import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import styles from './RecomendedTrack.css';
import img from '../../../assets/tom.jpg';
import img2 from '../../../assets/dean.jpg';
import img3 from '../../../assets/sia.png';
import img4 from '../../../assets/wiz.jpeg';
import img5 from '../../../assets/pre.jpg';

const recoSongs = [
  {
    id: 1,
    name: "kwesta",
    song: "huzet",
    img: "https://i0.wp.com/fakaza.me/wp-content/uploads/2022/11/Kwesta-Kabza-De-Small-ft-Papta-Mancane-Ma-E-FKA-Mash-%E2%80%93-Huzet.jpg?resize=678%2C381&ssl=1"
  },
  {
    id: 2,
    name: "justin bieber",
    song: "ghost",
    img: "https://images.genius.com/89b54d184e9f2db262623ae82f0f6444.1000x1000x1.png"
  },
  {
    id: 3,
    name: "post malone",
    song: "i fall apart",
    img: "https://i.ytimg.com/vi/gk0nB9vvYfU/maxresdefault.jpg"
  },
  {
    id: 4,
    name: "dua lipa",
    song: "dance the night",
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F05%2F25%2FDua-Lipa-Barbie-052623-2.jpg"
  },
  {
    id: 5,
    name: "ian dior",
    song: "you don't even",
    img: "https://i.ytimg.com/vi/4cOVLVX7O6c/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDAgSCh_MA8=&rs=AOn4CLDJP3bYIMxKhE1wGOw6Z-U9iEFWCQ"
  },
  {
    id: 6,
    name: "ty dolla $ign",
    song: "motion",
    img: "https://i.ytimg.com/vi/DOxGOrSXrmM/maxresdefault.jpg"
  },
  {
    id: 7,
    name: "bailey zimmerman",
    song: "religiously",
    img: "https://i.ytimg.com/vi/_tbCnZvU_0Y/sddefault.jpg"
  },
  {
    id: 8,
    name: "Silk Sonic",
    song: "smokin out the window",
    img: "https://images.genius.com/8c8f7f0f59eda88ab60da98f6df4ca96.1000x1000x1.png"
  },
  {
    id: 9,
    name: "the weekend",
    song: "Die for You",
    img: "https://i1.sndcdn.com/artworks-OIWBkz1pYv7SqpM6-I9mDQA-t500x500.jpg"
  },
  {
    id: 10,
    name: "Camidoh ft Phantom",
    song: "Sugarcane",
    img: "https://trendybeatz.com/images/Camidoh-Sugarcane-Ft-Phantom-art.jpg"
  }
]

export const RecomendTracks = () => {
  return (
    <div className='recomended-container'>
    <h4>Recommended tracks <span className='play-style-lines'>----</span></h4>
  
    <div className="rec-tracks-container">

      {
        recoSongs && recoSongs.map((song) => (
          <a href='#'><div className="song-card" key={song.id}>
          <div className="song-card-img"><img src={song.img} alt="" /></div>
          <div className="song-card-content">
            <div className="content">
                <div className="song-name">
                  <p className='track'>{song.name}</p>
                  <p className='track'>{song.song}</p>
                </div>
                <div className="icon-play">
                  <i className='icon-play-song'>
                    <BsFillPlayCircleFill />
                  </i>
                </div>
            </div>
            
          </div>
        </div></a>
        ))
      }
      
  
    </div>
     
   

    </div>
  )
}

