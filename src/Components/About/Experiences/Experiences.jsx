import { useState } from 'react'
import styles from './Experiences.module.css'

export const Experiences = () => {

    return (
        <div className={styles.experiences}>
            
            <div className={styles.timeline}>
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <div className={styles.datePlace}>
                            2025 - En cours | Interface3, 1030 Bruxelles
                        </div>
                        <div className={styles.title}>Développement Web Full Stack</div>

                    </li>
                    <li className={styles.item} ng-repeat="itembx">
                        <div className={styles.datePlace}>
                            2024 - En cours | Cercle des Naturalistes de Belgique 
                        </div>
                        <div className={styles.title}>Formation de guide naturaliste</div>

                    </li>

                    <li className={styles.item} ng-repeat="itembx">
                        <div className={styles.datePlace}>
                            2022 - 2024 | Librairie Filigranes, 1040 Bruxelles
                        </div>
                        <div className={styles.title}>Gestion du rayon Jeux de société</div>

                    </li>

                    <li className={styles.item} ng-repeat="itembx">
                        <div className={styles.datePlace}>
                            2018- 2021 | Université Libre de Bruxelles, 1050 Bruxelles
                        </div>
                        <div className={styles.title}>Master en Histoire de l’art et Archéologie</div>

                    </li>

                </ul>
            </div>

            <a href="#contact" className="btnLight">Contact</a>
        </div>
    )
}