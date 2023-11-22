import React, { useState, useRef } from "react";

export default function Player() {
  const playerRef = useRef();
  const [playerName, setPlayerName] = useState("");
  function onClickHandler() {
    setPlayerName(playerRef.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
