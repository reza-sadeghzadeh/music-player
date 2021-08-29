import { useState, useEffect } from "react";
import "./App.css";
import Library from "./components/Library";
import Main from "./components/Main";
import { getAllSongs, getOneRandomSong, findOneByTitle } from "./musics";
import Navbar from "./components/Navbar";

function App() {
  const [libOpen, setLibOpen] = useState(false);
  const [musics, setMusics] = useState([]);
  const [currentSong, setCurrentSong] = useState({
    index: 1,
    self: getOneRandomSong(),
    duration: null,
    currentTime: 0,
  });

  useEffect(() => {
    setMusics(getAllSongs());
  }, []);

  const handleLibClick = (e) => {
    let self = findOneByTitle(e.target.getElementsByTagName("h3")[0].innerText);

    setCurrentSong({
      index: self.id,
      self: self,
      currentTime: 0,
      duration: null,
    });
  };

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
        musics={musics}
        currentSong={currentSong}
        setLibOpen={setLibOpen}
        setCurrentSong={setCurrentSong}
      />
    </>
  );
}

export default App;
