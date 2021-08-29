import { useState } from "react";
import "./App.css";
import Library from "./components/Library";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [libOpen, setLibOpen] = useState(false);

  return (
    <>
      <Navbar libOpen={libOpen} setLibOpen={setLibOpen} />
      <Library libOpen={libOpen} />
      <Main />
    </>
  );
}

export default App;
