import styles from './MenuComponent.module.css'
const MenuComponent = () => {

    return (
        <header className={styles.header}>
            <div>
              <img src='https://raw.githubusercontent.com/omariosouto/alura-challenge-react/83c1232df52c07c0657ebdcf177d96f10b435348/public/images/logo.svg' alt='Uma folha '/>
            </div>
            <nav>
                <ul>
                    <li>Como fazer</li>
                    <li>/</li>
                    <li>Ofertas</li>
                    <li>/</li>
                    <li>Depoimentos</li>
                    <li>/</li>
                    <li>Vídeos</li>
                    <li>/</li>
                    <li>Meu carrinho </li>
                </ul>
            </nav>
        
        </header>
    )
}

export default MenuComponent