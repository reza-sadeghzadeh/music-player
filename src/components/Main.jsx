import React, { useState, useRef } from "react";
import Player from "./Player";

function Main({ setLibOpen, currentSong, setCurrentSong, musics }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);
  const audioRef = useRef();

  const handlePlay = async () => {
    setIsPlaying(true);

    let { current: AudioRef } = audioRef;

    if (!currentSong.time) {
      AudioRef.src = currentSong.self.src;
      await AudioRef.play();

      AudioRef.addEventListener("timeupdate", (e) => {
        setCurrentSong({
          ...currentSong,
          time: e.target.currentTime,
          duration: AudioRef.duration,
        });
      });
    } else {
      AudioRef.play();
    }
  };
  const handlePause = () => {
    let { current: AudioRef } = audioRef;

    setIsPlaying(false);
    AudioRef.pause();
  };

  const handleSkipPrevious = () => {
    // console.log(currentSong.index);
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
        handleSkipPrevious={handleSkipPrevious}
        musics={musics}
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
