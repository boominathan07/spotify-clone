import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
// import { BrowserRouter } from 'react-router-dom'
import { Router, Route } from "react-router-dom";
import PlayerContextProvider, { PlayerContext } from "./context/PlayerContext";
function App() {
  return (
    <PlayerContextProvider>
    <div className="h-screen bg-black">
      <div className="h-[90%] flex ">
        <Sidebar />
        <Display />
      </div>
      <Player />
      </div>
      </PlayerContextProvider>
  );
}

export default App;
