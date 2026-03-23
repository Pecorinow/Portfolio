import { useState } from 'react'
import styles from './Nav.module.css';
import logo_y from '../../assets/images/logo_yellow.png';

export const Nav = ({isHomeVisible}) => {

    // Création d'un state pour savoir si la nav est ouverte ou fermée : par défaut, fermée :
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
                    src={logo_y}
                    className={styles.logo}
                    aria-label="Logo du portfolio"></img>
                    {/* <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div> */}
            </button>
        )}
        {/* } */}
      
        {/* Si le state de isHomeVisible est false ET que la nav est ouverte :*/}
        {!isHomeVisible && (
            <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Accueil</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>À propos</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)}>Projets</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        )}

    </nav>
    )
}