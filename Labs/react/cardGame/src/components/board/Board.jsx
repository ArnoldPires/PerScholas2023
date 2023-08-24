import React from "react";
import Card from "../card/Card"
import "./board.css"

export default function Board() {
  return (
    <div className="Board">
      <h1>The Board</h1>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  )
}