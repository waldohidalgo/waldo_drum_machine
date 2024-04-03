import styles from "./teclado.module.css";
import Teclas from "../Teclas";
function Teclado({ data, handleChangeDisplay, isOn }) {
  return (
    <div className={styles.contenedor_botones}>
      {data.map(({ letra, sonido, display }) => (
        <Teclas
          key={letra}
          letra={letra}
          sonido={sonido}
          display={display}
          isOn={isOn}
          handleChangeDisplay={handleChangeDisplay}
        />
      ))}
    </div>
  );
}

export default Teclado;
