import React from 'react';
import { SiHomebridge } from 'react-icons/si';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { PiUserCircleBold } from 'react-icons/pi';
import { TbFolderHeart } from 'react-icons/tb';
import { ImFolderOpen } from 'react-icons/im';
import { PiGooglePodcastsLogoFill } from 'react-icons/pi';
import { BsUiRadios } from 'react-icons/bs';


const LeftMenuList = [
   {
    id: 1,
    icon: <SiHomebridge />,
    name: "Home"
   },
   {
    id: 2,
    icon: <BsMusicPlayerFill/>,
    name: "Explore"
   },
   {
    id: 3,
    icon: <PiUserCircleBold />,
    name: "Artist"
   },
   {
    id: 4,
    icon: <TbFolderHeart/>,
    name: "Genres"
   },
   {
    id: 5,
    icon: <ImFolderOpen/>,
    name: "Album"
   },
   {
    id: 6,
    icon: <PiGooglePodcastsLogoFill />,
    name: "PodCast"
   },
   {
    id: 7,
    icon: <BsUiRadios />,
    name: "Radio"
   },
]


export default LeftMenuList