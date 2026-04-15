import { useState } from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import { Experiences } from './Experiences/Experiences';
import { Competences } from './Competences/Competences';
import styles from './About.module.css';

export const About= () => {

    const [activeSection, setActiveSection] = useState('aboutMe');

     return (
        <section id="about">
            <h2>À PROPOS</h2>
            <div className={styles.aboutButtons}>
                <button type="button" className="btnDark" onClick={() => setActiveSection('aboutMe')} aria-pressed={activeSection === 'aboutMe'}>À propos de moi</button>
                <button type="button" className="btnDark" onClick={() => setActiveSection('experiences')} aria-pressed={activeSection === 'experiences'}>Expériences</button>
                <button type="button" className="btnDark" onClick={() => setActiveSection('competences')} aria-pressed={activeSection === 'competences'}>Compétences</button>
            </div>

            {activeSection === 'aboutMe' && <AboutMe />}
            {activeSection === 'experiences' && <Experiences />}
            {activeSection === 'competences' && <Competences />}
        </section>
    );
}