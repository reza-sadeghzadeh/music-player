import { useState, useEffect, useRef, useReducer } from "react";
import "./App.css";
import Library from "./components/Library";
import Main from "./components/Main";
import { getAllSongs, getOneRandomSong, findOneByTitle } from "./musicsLocal";
import Navbar from "./components/Navbar";
import { useAnimation } from "framer-motion";
import { allContext } from "./contexts";
import reducer from "./reducer";
import { initialState } from "./reducer";
import * as actions from "./actionTypes";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const controlVol = useAnimation();
  const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [volState, setVolState] = useState(false);
  const [musics, setMusics] = useState([]);

  const [self, setSelf] = useState(getOneRandomSong());
  const [shuffleMode, setShuffleMode] = useState("shuffle");

  useEffect(() => {
    setMusics(getAllSongs());
    let { current: AudioRef } = audioRef;
    dispatch({
      type: actions.setDuration,
      payload: { duration: AudioRef.duration },
    });

    AudioRef.addEventListener("timeupdate", async (e) => {
      dispatch({
        type: actions.timeUpdate,
        payload: {
          currentTime: e.target.currentTime.toFixed(1),
        },
      });
      dispatch({
        type: actions.setDuration,
        payload: { duration: e.target.duration },
      });
    });
  }, []);

  const handleLibClick = async (e) => {
    let self = findOneByTitle(e.target.getElementsByTagName("h3")[0].innerText);
    setSelf(self);
    handleSongChange(self);
  };

  const handleSongChange = async (self) => {
    let { current: AudioRef } = audioRef;

    dispatch({ type: "TIME_UPDATE", payload: { currentTime: 0 } });
    AudioRef.src = self.src;

    if (isPlaying) {
      try {
        await AudioRef.play();
      } catch (ex) {
        return;
      }
    }
  };
  const handlePlay = async () => {
    let { current: AudioRef } = audioRef;

    if (state.currentTime === 0) {
      setIsPlaying(true);
      handleSongChange(self);
    } else {
      setIsPlaying(true);
    }
    try {
      await AudioRef.play();
    } catch (ex) {
      return;
    }
  };

  const handlePause = () => {
    let { current: AudioRef } = audioRef;
    setIsPlaying(false);
    AudioRef.pause();
  };
  const skipForward = (a) => {
    if (a === "forward") {
      audioRef.current.currentTime =
        audioRef.current.currentTime + audioRef.current.duration * 0.025;
    }
    if (a === "backward") {
      audioRef.current.currentTime =
        audioRef.current.currentTime - audioRef.current.duration * 0.025;
    }
  };

  const handleSkipPreviousDoblue = () => {
    if (self.id > 1) {
      setSelf(musics[self.id - 2]);
      handleSongChange(musics[self.id - 2]);
    } else {
      handleSongChange(musics[musics.length - 1]);
      setSelf(musics[musics.length - 1]);
    }
  };
  const handleSkipPrevious = () => {
    handleSongChange(musics[self.id - 1]);
    setSelf(musics[self.id - 1]);
  };
  const handleSkipnext = () => {
    switch (shuffleMode) {
      case "shuffle":
        let newSelf = self;
        while (newSelf === self) {
          newSelf = getOneRandomSong();
        }
        setSelf(newSelf);
        handleSongChange(newSelf);
        break;

      default:
        if (self.id <= musics.length - 1) {
          setSelf(musics[self.id]);
          handleSongChange(musics[self.id]);
        } else {
          handleSongChange(musics[0]);
          setSelf(musics[0]);
        }
        break;
    }
  };

  const handleEvents = (e) => {
    switch (e.code) {
      case "Space":
        if (isPlaying) handlePause();
        else handlePlay();
        break;

      case "Escape":
        dispatch({
          type: "SET_LIB_OPEN",
          payload: { libopen: !state.libopen },
        });
        break;

      case "ArrowRight":
        try {
          skipForward("forward");
        } catch (ex) {}
        break;
      case "ArrowLeft":
        skipForward("backward");
        break;
      case "ArrowUp":
        try {
          animateVolumeHolder();
          audioRef.current.volume += 0.05;
          if (audioRef.current.volume > 0.95) audioRef.current.volume = 1;
        } catch (ex) {}
        break;
      case "ArrowDown":
        try {
          animateVolumeHolder();
          audioRef.current.volume -= 0.05;
          if (audioRef.current.volume < 0.05) audioRef.current.volume = 0;
        } catch (ex) {}
        break;
      case "KeyV":
        setVolState(!volState);
        break;
      case "KeyM":
        if (shuffleMode === "shuffle") setShuffleMode("order");
        else if (shuffleMode === "order") setShuffleMode("repeatOne");
        else setShuffleMode("shuffle");
        break;

      default:
        break;
    }
  };

  const animateVolumeHolder = () => {
    controlVol.start({
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 0.5,
        times: [0.3, 0.45, 0.8, 1],
      },
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEvents);
    return () => window.removeEventListener("keydown", handleEvents);
  }, [state]);
  // }, [isPlaying, libOpen, volState, shuffleMode]);

  return (
    <allContext.Provider value={{ state, dispatch, actions }}>
      <Navbar />
      <Library self={self} handleLibClick={handleLibClick} musics={musics} />
      <Main
        controlVol={controlVol}
        self={self}
        volState={volState}
        setVolState={setVolState}
        isPlaying={isPlaying}
        skipForward={skipForward}
        handleSkipnext={handleSkipnext}
        handleSkipPrevious={handleSkipPrevious}
        handleSkipPreviousDoblue={handleSkipPreviousDoblue}
        handlePause={handlePause}
        handlePlay={handlePlay}
        audioRef={audioRef}
        shuffleMode={shuffleMode}
        setShuffleMode={setShuffleMode}
      />
    </allContext.Provider>
  );
}

export default App;
