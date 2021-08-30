import React, { useState } from "react";
import Player from "./Player";

function Main({
  setLibOpen,
  currentSong,
  audioRef,
  isPlaying,
  handlePlay,
  handlePause,
  self,
  handleSkipPrevious,
  shuffleMode,
  setShuffleMode,
  handleSkipPreviousDoblue,
  handleSkipnext,
  skipForward,
}) {
  const [volState, setVolState] = useState(false);

  return (
    <main
      className="flex-center"
      style={{ width: "100vw" }}
      onClick={() => {
        setLibOpen(false);
      }}
    >
      <Player
        self={self}
        skipForward={skipForward}
        handleSkipnext={handleSkipnext}
        shuffleMode={shuffleMode}
        setShuffleMode={setShuffleMode}
        audioRef={audioRef}
        handleSkipPrevious={handleSkipPrevious}
        handleSkipPreviousDoblue={handleSkipPreviousDoblue}
        handlePause={handlePause}
        handlePlay={handlePlay}
        isPlaying={isPlaying}
        currentSong={currentSong}
        volState={volState}
        setVolState={setVolState}
      />
    </main>
  );
}

export default Main;
