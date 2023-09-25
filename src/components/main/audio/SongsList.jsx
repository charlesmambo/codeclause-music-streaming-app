import React, {audio} from "react";
import ReactAudioPlayer from 'react-audio-player';
import Bailey from "../../../audio/bailey.mp3"
import Dean from "../../../audio/dean.mp3"
import Tom from "../../../audio/tomw.mp3";
import Sia from "../../../audio/sia.mp3";
import Pre from "../../../audio/pre.mp3";
import Wiz from "../../../audio/wiz.mp3";
import TomOdel from "../../../audio/tomodell.mp3";
import Dax from "../../../audio/dax.mp3";
import Chris from "../../../audio/chris.mp3";
import Rema from "../../../audio/rema.mp3";
import Nf from "../../../audio/nf.mp3";
import Nastyc from "../../../audio/nasty.mp3";
import Ayra from "../../../audio/ayra.mp3";
import Khalid from "../../../audio/khalid.mp3";
import Libianca from "../../../audio/libianca.mp3";
import Terms from "../../../audio/terms.mp3";
import Snz from "../../../audio/snooze.mp3";
import Eli from "../../../audio/eli.mp3";
import Santino from "../../../audio/santino.mp3";
import Zach from "../../../audio/zach.mp3";
import Zyn from "../../../audio/zayn.mp3";
import James from "../../../audio/james.mp3";



const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "waves",
      artist: "dean lewis",
      song: Dean,
      album: "a place we knew",
      length: "4.04",
      imgSrc: "https://www.billboard.com/wp-content/uploads/media/Dean-Lewis-press-photo-2018-a-billboard-1548.jpg"
    },
    {
      id: 2,
      favourite: false,
      songName: "not giving",
      artist: "tom walker",
      song: Tom,
      album: "what a time to be alive",
      length: "3.50",
      imgSrc: "https://images.squarespace-cdn.com/content/v1/535eb4d7e4b08c41d0c4ae5c/1550857545510-OVT3E5O0QO9LR3NIAXW8/ke17ZwdGBToddI8pDm48kN_ZoNdj1kv_gIvm4zjH76N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8AelHsSihC3tfiYK1eHEM7W3AVjJQSBul2wE-DqW7dygg/Tom-Walker-Not-Giving-In.jpg",
    },
    {
      id: 3,
      favourite: false,
      songName: "the greatest",
      artist: "sia",
      song: Sia,
      album: "The Greatest",
      length: "3.32",
      imgSrc: "https://static.onecms.io/wp-content/uploads/sites/6/2016/09/the-greatest.jpg",
    },
    {
      id: 4,
      favourite: false,
      songName: "i just wanna feel somthing",
      artist: "pre_ka_iro",
      song: Pre,
      album: "mood",
      length: "2.48",
      imgSrc: "https://p16.resso.me/img/tos-alisg-i-0000/a6e9d20450944a9fa087f09ba47d402d~c5_750x750.jpg",
    },
    {
      id: 5,
      favourite: false,
      songName: "warzone",
      artist: "bailey zimmerman",
      song: Bailey,
      album: "religiously",
      length: "3.40",
      imgSrc: "https://countrynow.com/wp-content/uploads/2023/05/Bailey-Zimmerman-Photo-by-Spidey-Smith.jpg",
    },
    {
      id: 6,
      songName: "no more",
      artist: "nasty c",
      song: Nastyc,
      album: "I Love It Here",
      length: "3.18",
      imgSrc: "https://www.ubetoo.com/wp-content/uploads/2020/02/externallink_bff7afd9eb3ca999d31d1ed6a0b1c3d7.1000x1000x1-www.ubetoo.com.jpg"
    },
    {
      id: 7,
      favourite: false,
      songName: "under the influence",
      artist: "chris brown",
      song: Chris,
      album: "indigo",
      length: "3.06",
      imgSrc: "https://townsquare.media/site/812/files/2023/07/attachment-chris-brown.jpg?w=1200&zc=1&s=0&a=t&q=90"
    },
    {
      id: 8,
      favourite: false,
      songName: "snooze",
      artist: "SZA",
      song: Snz,
      album: "Sos",
      length: "3.25",
      imgSrc: "https://i1.sndcdn.com/artworks-RWR4vT3WMgtq-0-t500x500.jpg",
    },
    {
      id: 9,
      favourite: false,
      songName: "promises",
      artist: "wiz khalifa",
      song: Wiz,
      album: "Blacc Hollywood",
      length: "3.30",
      imgSrc: "https://i.scdn.co/image/ab67616d0000b27327ed4f26fa2bfbd714dba7dd"
    },
    {
      id: 10,
      favourite: false,
      songName: "better",
      artist: "khalid",
      song: Khalid,
      album: "Free Spirit",
      length: "3.49",
      imgSrc: "https://cdns-images.dzcdn.net/images/cover/3d3c3236e4ac77e5a9f7eea308d4e1e5/500x500.jpg"
    },
    {
      id: 11,
      favourite: false,
      songName: "running",
      artist: "NF",
      song: Nf,
      album: "hope",
      length: "4. 13",
      imgSrc: "https://i.ytimg.com/vi/SVIQrU2EZZU/maxresdefault.jpg"
    },
    {
      id: 12,
      favourite: false,
      songName: "heal",
      artist: "tom odell",
      song: TomOdel,
      album: "Long Way Down",
      length: "3.14",
      imgSrc: "https://i.ytimg.com/vi/prsRiVTKqYg/maxresdefault.jpg"
    },
    {
      id: 13,
      favourite: false,
      songName: "dear alcohol",
      artist: "dax",
      song: Dax,
      album: "What is life?",
      length: "3.57",
      imgSrc: "https://trendybeatz.com/images/Dax-Picture.jpg"
    },
    {
      id: 14,
      favourite: false,
      songName: "rush",
      artist: "Ayra Starr",
      song: Ayra,
      album: "19 & Dangerous",
      length: "3.06",
      imgSrc: "https://i.ytimg.com/vi/crtQSTYWtqE/sddefault.jpg?v=6331bc2f"
    },
    {
      id: 15,
      favourite: false,
      songName: "People",
      artist: "Libianca ",
      song: Libianca,
      album: "People",
      length: "3.-5",
      imgSrc: "https://img.inews.co.id/media/620/files/inews_new/2023/03/08/lirik_lagu_people_libianca.jpg"
    },
    {
      id: 16,
      favourite: false,
      songName: "Most Beautiful",
      artist: "Eli Jae",
      song: Eli,
      album: "Blend",
      length: "2.31",
      imgSrc: "https://imagestore.ffm.to/link/f2cf28fbd71bcee30a9a7937666c533b.jpeg"
    },
    {
      id: 17,
      favourite: false,
      songName: "Calm Down",
      artist: "Rema",
      song: Rema,
      album: "Rave & Roses",
      length: "3.40",
      imgSrc: "https://www.afrocritik.com/wp-content/uploads/2022/02/images-2022-02-17T153456.921.jpeg"
    },
    {
      id: 18,
      favourite: false,
      songName: "Free Mind",
      artist: "Tems",
      song: Terms,
      album: "For Broken Ears",
      length: "4.08",
      imgSrc: "https://media.pitchfork.com/photos/6143a77476d78dced3ec64ed/1:1/w_3000,h_3000,c_limit/100000x100000-999.jpeg"
    },
    {
      id: 19,
      favourite: false,
      songName: "bullet",
      artist: "santino le saint",
      song: Santino,
      album: "Rage of Angels",
      length: "3.28",
      imgSrc: "https://i.ytimg.com/vi/5FVsTqQ0nzQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZJ6ttKxVhfRqFEqd75yQnM_EgVg"
    },
    {
      id: 20,
      favourite: false,
      songName: "i'll be good",
      artist: "jaymes young",
      song: James,
      album: "Feel Something",
      length: "4.08",
      imgSrc: "https://i.scdn.co/image/ab67616d0000b273a9897f65d1ead1be10a51e3f"
    },
    {
      id: 21,
      favourite: false,
      songName: "dusk till dawn",
      artist: "zayn malik",
      song: Zyn,
      album: "Icarus Falls",
      length: "3.55",
      imgSrc: "https://i.ytimg.com/vi/tt2k8PGm-TI/maxresdefault.jpg"
    },
    {
      id: 22,
      favourite: false,
      songName: "never knew a heart could break itself",
      artist: "zach hood",
      song: Zach,
      album: "Blossom",
      length: "2.52",
      imgSrc: "https://i1.sndcdn.com/artworks-QjzzxxzRhvDQ-0-t500x500.jpg"
    },
  ];
  
  export { Songs };