import { useState, useEffect } from "react";
import "./App.css";
import Library from "./components/Library";
import Main from "./components/Main";
import { getAllSongs } from "./musics";
import Navbar from "./components/Navbar";

function App() {
  const [libOpen, setLibOpen] = useState(false);
  const [musics, setMusics] = useState([]);
  const [currentSong, setCurrentSong] = useState({
    index: 0,
    duration: null,
    currentTime: 0,
  });

  useEffect(() => {
    setMusics(getAllSongs());
  }, []);

  return (
    <>
      <Navbar libOpen={libOpen} setLibOpen={setLibOpen} />
      <Library
        libOpen={libOpen}
        musics={musics}
        currentSong={currentSong}
        setLibOpen={setLibOpen}
        setCurrentSong={setCurrentSong}
      />
      <Main
        musics={musics}
        currentSong={currentSong}
        setLibOpen={setLibOpen}
        setCurrentSong={setCurrentSong}
      />
    </>
  );
}

export default App;
