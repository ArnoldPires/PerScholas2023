import React, { useState } from "react";
import Header from './components/header/Header'
import Board from './components/board/Board'
import './app.css'

export default function App() {
  // Setting state
  const [newCard, setNewCard] = useState({})
  const [playerName, setPlayerName] = useState("Sarah")
  // function to create a new card
  // A button to create new cards
  return (
    <div className="App">
      <h1>{playerName}</h1>
      <div className="inputs">
        <input placeholder="Player Name" />
        <input  placeholder="Character Name" />
        <input  placeholder="Character Race" />
        <input  placeholder="Character Skills" />
        {/*SUBMIT BUTTON*/}
      </div>
      <Board />
    </div>
  )
}