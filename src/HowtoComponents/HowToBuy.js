import planta from "../img/planta.png";
import styles from "./HowToBuy.module.css";
import bola from "../img/bola.png";

const HowToBuy = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.control}>
        <div>
          <img src={planta} alt="folhas"></img>
        </div>
        <div className={styles.ulDiv}>
          <h3> Como conseguir</h3>
          <h2>minha planta</h2>
          <ul>
            <li>
              <img src={bola} alt="circulo" /> <p>Escolha suas plantas </p>
            </li>
            <li>
              <img src={bola} alt="circulo" />
              <p>Faça seu pedido </p>
            </li>
            <li>
              <img src={bola} alt="circulo" /> <p>Aguarde na sua casa </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
