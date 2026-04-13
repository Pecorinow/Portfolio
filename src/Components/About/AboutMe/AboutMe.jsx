import { useState } from 'react'
import styles from './AboutMe.module.css';
import cvPhoto from '../../../assets/images/CV_photo_2.png'

export const AboutMe = () => {

    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutMeText}>
                <p><span>Curieuse</span>, <span>créative</span> et grande amatrice de <span>casse-têtes</span>, ce n’est pourtant qu’après un parcours littéraire en histoire de l’art et en librairie que je me tourne finalement vers le web. J’y trouve tout ce que j’aime : <span>apprendre</span> de nouveaux langages, <span>décortiquer</span> des problèmes en détail, <span>discuter</span> toutes les solutions possibles...</p>
                <br></br>
                <p>Particulièrement attentive aux questions d’<span>accessibilité</span> et de <span>bilan carbone</span> du web, je m’efforce de coder des sites à la fois responsables et attrayants.</p>
                <br></br>
                <p>Dans mon temps libre, j'<span>écris</span>, je fais de la <span>bande-dessinée</span> et je me forme à devenir <span>guide nature</span> 🌱 , le tout avec mon chat sur les genoux.</p>
            </div>
            
            <img src={cvPhoto} alt="Photo de présentation" loading="lazy"/>
        </div>
    )
}