import React, {audio} from "react";

const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "waves",
      artist: "dean lewis",
      song: "https://music.youtube.com/watch?v=USHn2FnZk40",
      album: "a place we knew",
      length: "2.58"
      // imgSrc: deanImg,
    },
    {
      id: 2,
      favourite: false,
      songName: "not giving",
      artist: "tom walker",
      song: "https://music.youtube.com/watch?v=IqX56d4q4rc",
      album: "what a time to be alive",
      length: "3.50"
      // imgSrc: tom,
    },
    {
      id: 3,
      favourite: false,
      songName: "the greatest",
      artist: "sia",
      song: "https://music.youtube.com/watch?v=Yx4v8l3hLAU",
      album: "a place we knew",
      length: "2.58"
      // imgSrc: {sia},
    },
    {
      id: 4,
      favourite: false,
      songName: "i just wanna feel somthing",
      artist: "pre_ka_iro",
      song: "https://music.youtube.com/watch?v=7IkmfR4o6RY",
      album: "mood",
      length: "2.50"
      // imgSrc: {prekairo},
    },
    {
      id: 5,
      favourite: false,
      songName: "warzone",
      artist: "bailey zimmerman",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
      album: "religiously",
      length: "3.40",
      // imgSrc:,
    },
    {
      id: 6,
      songName: "no more",
      artist: "nasty c",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
      album: "i love it here",
      length: "3.20",
      // imgSrc:
    },
    {
      id: 7,
      favourite: false,
      songName: "under the influence",
      artist: "chris brown",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
      // imgSrc:
        album: "indigo",
        length: "4.00",
    },
    {
      id: 8,
      favourite: false,
      songName: "snooze",
      artist: "SZA",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
      // imgSrc:
        album: "Sos",
        length: "3.25",
    },
    {
      id: 9,
      favourite: false,
      songName: "promises",
      artist: "wiz khalifa",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
      // imgSrc:
        album: "Blacc Hollywood",
        length: "3.14",
    },
    {
      id: 10,
      favourite: false,
      songName: "Softest Touch",
      artist: "khalid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      // imgSrc:
        album: "Softest Touch",
        length: "3.50",
    },
    {
      id: 11,
      favourite: false,
      songName: "running",
      artist: "NF",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      // imgSrc:
        album: "hope",
        length: "4. 00",
    },
    {
      id: 12,
      favourite: false,
      songName: "the greatest",
      artist: "sia",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      // imgSrc:
        album: "This Is Acting",
        length: "3.50",
    },
    {
      id: 13,
      favourite: false,
      songName: "dear alcohol",
      artist: "dax",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      // imgSrc:
        album: "What is life?",
        length: "3.58",
    },
  ];
  
  export { Songs };