import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-simbol.png'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo ignit"/>
        </header>
    )
}