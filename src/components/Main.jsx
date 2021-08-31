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
  volState,
  controlVol,
  setVolState,
}) {
  return (
    <main
      className="flex-center"
      style={{ width: "100vw" }}
      onClick={() => {
        setLibOpen(false);
      }}
    >
      <Player
        controlVol={controlVol}
        self={self}
        volState={volState}
        setVolState={setVolState}
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
