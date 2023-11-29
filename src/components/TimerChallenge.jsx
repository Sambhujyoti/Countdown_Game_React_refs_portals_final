import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  function handleTimerStart() {
    setTimeStarted(true);
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  }

  function handleTimerStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleTimerStop : handleTimerStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
