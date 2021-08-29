import React, { useState, useRef } from "react";
import Player from "./Player";

function Main({ setLibOpen, currentSong, setCurrentSong, musics }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);
  const audioRef = useRef();
  const inpRef = useRef();

  const handlePlay = () => {
    let { current: AudioRef } = audioRef;

    if (!currentSong.time) {
      AudioRef.src = currentSong.self.src;
      AudioRef.play();
      AudioRef.addEventListener("timeupdate", (e) => {
        setCurrentSong({
          time: e.target.currentTime,
          duration: e.target.duration,
          ...currentSong,
        });
      });
    } else {
      AudioRef.play();
    }
    setIsPlaying(true);
  };
  const handlePause = () => {
    let { current: AudioRef } = audioRef;

    setIsPlaying(false);
    AudioRef.pause();
  };

  return (
    <main
      className="flex-center"
      style={{ width: "100vw" }}
      onClick={() => setLibOpen(false)}
      className="flex-center"
    >
      <Player
        audioRef={audioRef}
        musics={musics}
        inpRef={inpRef}
        handlePause={handlePause}
        handlePlay={handlePlay}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </main>
  );
}

export default Main;
