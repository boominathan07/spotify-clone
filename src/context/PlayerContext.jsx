import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);
 console.log("songsData[0]:", songsData[0]); 
  const [status, setStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => { audioRef.current.play(); setStatus(true); };
  const pause = () => { audioRef.current.pause(); setStatus(false); };

  // PlayerContext.jsx

const playWithId = (id) => {
  console.log("playWithId called with:", id);  
  const song = songsData[id];
  console.log("song found:", song);  
  setTrack(song);
};

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id -1 ]);
      await audioRef.current.play();
      setStatus(true);
    }
    
  }
  const next = async () => {
    if (track.id < songsData.length-1) {
      await setTrack(songsData[track.id +1 ]);
      await audioRef.current.play();
      setStatus(true);
    }
    
  }

  // Play whenever track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setStatus(true)).catch(() => {});
    }
  }, [track]);

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      if (!audioRef.current) return;

      audioRef.current.ontimeupdate = () => {
        if (!audioRef.current) return; 

        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        if (seekBar.current && duration) {
          seekBar.current.style.width = Math.floor((current / duration) * 100) + "%";
        }

        setTime({
          currentTime: {
            second: Math.floor(current % 60),
            minute: Math.floor(current / 60),
          },
          totalTime: {
            second: Math.floor(duration % 60),
            minute: Math.floor(duration / 60),
          },
        });
      };
    }, 1000);

    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
}, [audioRef]);
  const contextValue = {
    audioRef, seekBar, seekBg,
    track, setTrack,
    status, setStatus,
    time, setTime,
    play, pause, playWithId, seekSong,
    next,previous
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
            <audio ref={audioRef} src={track?.file} preload="auto" /> 
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;