import { useState } from 'react'
import styles from './Nav.module.css';
import logo from '../../assets/images/logo.png';

export const Nav = ({isHomeVisible}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav>
        {!isHomeVisible && (
            <button
                className={styles.navBtn}
                type='button' 
                onClick={() => {console.log('clic!'); setIsOpen(!isOpen);}} 
                aria-expanded={isOpen} 
                aria-label={isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}>
                    <img
                    src={logo}
                    className={styles.logo}
                    aria-label="Logo du portfolio"></img>
            </button>
        )}
      
    
        {!isHomeVisible && (
            <ul
            className={`${styles.navList} ${isOpen ? styles.open : ''}`} 
            inert={!isOpen}>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Accueil</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>À propos</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)}>Projets</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        )}

    </nav>
    )
}