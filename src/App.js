import { useState, useEffect, useRef } from "react";
import "./App.css";
import Library from "./components/Library";
import Main from "./components/Main";
import { getAllSongs, getOneRandomSong, findOneByTitle } from "./musicsLocal";
import Navbar from "./components/Navbar";

function App() {
  const audioRef = useRef();
  const [libOpen, setLibOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volState, setVolState] = useState(false);
  const [musics, setMusics] = useState([]);
  const [currentSong, setCurrentSong] = useState({
    time: 0,
    duration: null,
  });
  const [self, setSelf] = useState(getOneRandomSong());
  const [shuffleMode, setShuffleMode] = useState("shuffle");

  useEffect(() => {
    setMusics(getAllSongs());
    let { current: AudioRef } = audioRef;
    AudioRef.addEventListener("timeupdate", async (e) => {
      setCurrentSong({
        time: e.target.currentTime,
        duration: AudioRef.duration,
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
    setCurrentSong({
      ...currentSong,
      time: 0,
    });
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

    if (currentSong.time === 0) {
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
    // console.log(e.code);
    switch (e.code) {
      case "Space":
        if (isPlaying) handlePause();
        else handlePlay();
        break;

      case "Escape":
        setLibOpen(!libOpen);
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
          audioRef.current.volume += 0.05;
          if (audioRef.current.volume > 0.95) audioRef.current.volume = 1;
        } catch (ex) {}
        break;
      case "ArrowDown":
        try {
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

  useEffect(() => {
    window.addEventListener("keydown", handleEvents);
    return () => window.removeEventListener("keydown", handleEvents);
  }, [isPlaying, libOpen, volState, shuffleMode]);

  return (
    <>
      <Navbar libOpen={libOpen} setLibOpen={setLibOpen} />
      <Library
        libOpen={libOpen}
        handleLibClick={handleLibClick}
        musics={musics}
        currentSong={currentSong}
        setLibOpen={setLibOpen}
      />
      <Main
        self={self}
        volState={volState}
        setVolState={setVolState}
        skipForward={skipForward}
        handleSkipnext={handleSkipnext}
        handleSkipPrevious={handleSkipPrevious}
        handleSkipPreviousDoblue={handleSkipPreviousDoblue}
        handlePause={handlePause}
        handlePlay={handlePlay}
        isPlaying={isPlaying}
        audioRef={audioRef}
        shuffleMode={shuffleMode}
        setShuffleMode={setShuffleMode}
        currentSong={currentSong}
        setLibOpen={setLibOpen}
      />
    </>
  );
}

export default App;
