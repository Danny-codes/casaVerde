import styles from "./NewsLetter.module.css";
import tree from '../img/hero-image.png'
import { useRef, useState } from "react";

const NewsLetter = () => {
  const emailRef = useRef()
  const [emailIsValid, setEmailISValid] = useState(false)
  const [email, setEmail] = useState(' ')



  const inputHandler = async(e) => {
     setEmail(e.target.value)
    if(email.length  > 0 && email.match(/@/)){
      setEmailISValid(true)
    }
    if(email.length  < 0 || !email.match(/@/)){
      setEmailISValid(false)
    }

    console.log(email.indexOf("@"))
  }

  


  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <h3 className={styles.h3}>Sua casa com as </h3>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <form>
        <input onChange={inputHandler} ref={emailRef} type="email" placeholder="Insire seu e-mail" />
        {emailIsValid && <button className={styles.buttonAble}> Assinar newsletter</button>}
        {!emailIsValid && <button className={styles.disabledButton} disabled = {true}> Assinar newsletter</button>}
        </form>
      </div>
      <div className={styles.imgDiv} >
         <img src={tree} alt="tree" /> 
      </div>
    </main>
  );
};

export default NewsLetter;
