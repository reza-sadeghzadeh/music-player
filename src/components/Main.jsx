import React from "react";
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
  return (
    <main
      className="flex-center"
      style={{ width: "100vw" }}
      onClick={() => setLibOpen(false)}
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
      />
    </main>
  );
}

export default Main;
