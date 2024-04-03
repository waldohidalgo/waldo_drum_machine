import styles from "./teclas.module.css";
import React from "react";
import { playAudio } from "../../utils/funcionesGenerales";
function Teclas({ letra, sonido, display, handleChangeDisplay, isOn }) {
  const audioElement = React.useRef(null);

  function handleButtonAudio(e) {
    if (isOn) {
      const audioTag = audioElement.current;
      playAudio(audioTag);
      handleChangeDisplay(display);
    }
  }

  return (
    <div
      className="drum-pad"
      id={display.replace(" ", "-")}
      onClick={handleButtonAudio}
    >
      <div style={{ marginInline: "5px" }}>
        <div className={styles.button}>
          <a href="#">{letra}</a>
        </div>
      </div>
      <audio
        className="clip"
        id={letra}
        src={sonido}
        ref={audioElement}
      ></audio>
    </div>
  );
}

export default Teclas;
