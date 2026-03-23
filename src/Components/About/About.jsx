import { useState } from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import { Experiences } from './Experiences/Experiences';
import { Competences } from './Competences/Competences';
import styles from './About.module.css';

export const About= () => {
    // Création d'un state pour savoir quelle section est active : par défaut, c'est aboutMe :
    const [activeSection, setActiveSection] = useState('aboutMe');

     return (
        <section id="about">
            <h2>À PROPOS</h2>
            <div className={styles.aboutButtons}>
                {/* Au clic, le state se met à jour et prend la valeur du bouton cliqué : */}
                <button type="button" className="btnDark" onClick={() => setActiveSection('aboutMe')} aria-pressed={activeSection === 'aboutMe'}>À propos de moi</button>
                <button type="button" className="btnDark" onClick={() => setActiveSection('experiences')} aria-pressed={activeSection === 'experiences'}>Expériences</button>
                <button type="button" className="btnDark" onClick={() => setActiveSection('competences')} aria-pressed={activeSection === 'competences'}>Compétences</button>
            </div>

            {/* Afficher les composants selon la valeur du state : */}
            {activeSection === 'aboutMe' && <AboutMe />}
            {activeSection === 'experiences' && <Experiences />}
            {activeSection === 'competences' && <Competences />}
        </section>
    );
}