import { useState } from 'react'
import style from './Projects.module.css'
import { ProjectCard } from './ProjectChild/ProjectCard'
import burnoutRadar from '../../assets/images/BurnoutRadar.png'
import saveIt from '../../assets/images/SaveIt.png'


export const Projects = () => {

    return (
        <section id="projects">
            <h2>PROJETS</h2>
            <ProjectCard
                isReversed={false}
                image={saveIt}
                alt="Page d'accueil du projet Save it !"
                title="Save it !"
                languages="HTML, CSS, PHP"
                date="Octobre 2025"
                description={[
                    "Projet de groupe réalisé lors d’un Hackathon de 3 jours à Interface3.",
                    "Outil de gestion budgétaire, guidant l'utilisateur via un questionnaire pour éviter les achats impulsifs, avec suggestion d'alternatives et système de récompenses.",
                    "J’ai créé le Figma, et je me suis occupée de l’HTML et du CSS."]}
                siteUrl="https://saveit.hackathon2025.interface3.be/connexion"
                gitHubUrl="https://github.com/Closing-git/keep-your-money.git"
            />
            <ProjectCard
                isReversed={true}
                image={burnoutRadar}
                alt="Page d'accueil du projet Burnout Radar !"
                title="Burn-out Radar"
                languages="HTML, CSS, JavaScript"
                date="Novembre 2025"
                description={[
                    "Premier projet réalisé en autonomie à Interface3.",
                    "Outil de diagnostic de burnout, avec questionnaire personnalisé, recherche de psychologues par spécialité et localisation via une API fictive.",
                    "Compétence développée : Développement front-end (HTML, CSS, JavaScript) avec manipulation de données structurées et filtrage dynamique."]}
                siteUrl=""
                gitHubUrl="https://github.com/Pecorinow/BurnoutRadar.git"/>
        </section>
    )
}