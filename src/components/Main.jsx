import React, { useContext } from "react";
import { allContext } from "../contexts";

import Player from "./Player";

function Main({
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
  const { dispatch, actions } = useContext(allContext);

  return (
    <main
      className="flex-center"
      style={{ width: "100vw" }}
      onClick={() => {
        dispatch({ type: actions.setLibopen, payload: { libopen: false } });
      }}
    >
      <Player
        controlVol={controlVol}
        self={self}
        volState={volState}
        isPlaying={isPlaying}
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
        currentSong={currentSong}
      />
    </main>
  );
}

export default Main;
