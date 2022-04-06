import planta_ajuga from "../img/planta_ajuga.png";
import cactus from "../img/cactus.png";
import cordyline from "../img/cordyline.png";
import crassura from "../img/crassula.png";
import delaira from "../img/Delaira.png";
import datura from "../img/Datura.png";
import styles from './Offers.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

const Dummy_Data = [
     {
        id: 'p1',
        img: planta_ajuga,
        name: 'Ajuga reptans',
        price: 'R$ 20,00'
    },
     {
        id: 'p2', 
        img: cordyline,
        name: 'Cordyline fruticosa',
        price: 'R$ 20,00',
    },
     {
        id: 'p3',
        img: crassura,
        name: 'Crassula ovata',
        price: 'R$ 20,00'
    },
     {
        id: 'p4',
        img: cactus,
        name: 'Cyperus rotundus',
        price: 'R$ 20,00'
    },
     {
        id: 'p5',
        img: delaira,
        name: 'Delairea odorata',
        price: 'R$ 20,00'
    },
     {
        id: 'p6',
        img: datura,
        name: 'Datura metel',
        price: 'R$ 20,00'
    },

]

const Offers = () => {

    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    return(
        <div className={styles.mainDiv}>
            <h3>Conheça nossas</h3>
            <h1>Ofertas</h1>
            <ul>
                {Dummy_Data.map(Plant => (
                     <li>
                     <img src={Plant.img} alt={Plant.name}/>
                     <div>
                         <h1>{Plant.name}</h1>
                         <p>{Plant.price}</p>
                         <button>Comprar <span>{arrow}</span></button>
                     </div>
                 </li>
                ))}
               
            </ul> 
        </div>
    )
}

export default Offers