import React from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Teclado from "../components/Teclado";
import { playAudio } from "../utils/funcionesGenerales";
import Footer from "../components/Footer";
import { Switch } from "../components/Switch";

const data = [
  { letra: "Q", sonido: "/sounds/heater_1.mp3", display: "Heater 1" },
  { letra: "W", sonido: "/sounds/heater_2.mp3", display: "Heater 2" },
  { letra: "E", sonido: "/sounds/heater_3.mp3", display: "Heater 3" },
  { letra: "A", sonido: "/sounds/heater_4.mp3", display: "Heater 4" },
  { letra: "S", sonido: "/sounds/clap.mp3", display: "Clap" },
  { letra: "D", sonido: "/sounds/open_hh.mp3", display: "Open HH" },
  { letra: "Z", sonido: "/sounds/kick_n_hat.mp3", display: "Kick n' Hat" },
  { letra: "X", sonido: "/sounds/kick.mp3", display: "Kick" },
  { letra: "C", sonido: "/sounds/closed_hh.mp3", display: "Closed HH" },
];
export default function Home() {
  const [display, setDisplay] = React.useState("---");
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      const teclaPresionada = e.key.toUpperCase();

      if (data.map((e) => e.letra).includes(teclaPresionada) && isOn) {
        const elementoAudioSeleccionado =
          document.getElementById(teclaPresionada);
        playAudio(elementoAudioSeleccionado);
        setDisplay(data.find((obj) => teclaPresionada == obj.letra).display);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [display, isOn]);

  const handleChangeDisplay = (nombreSonido) => {
    setDisplay(nombreSonido);
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setDisplay("---");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="Drum Machine Project" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Drum Machine</h1>
        <div className={styles.contenedor_teclado} id="drum-machine">
          <Teclado
            data={data}
            handleChangeDisplay={handleChangeDisplay}
            isOn={isOn}
          />
          <div className={styles.contenedor_display}>
            {" "}
            <h2 className={styles.sound_name_title}>ON/OFF</h2>
            <Switch isOn={isOn} toggleSwitch={toggleSwitch} />
            <h2 className={styles.sound_name_title}>Sound Name</h2>
            <div id="display" className={styles.display_texto}>
              {display}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
