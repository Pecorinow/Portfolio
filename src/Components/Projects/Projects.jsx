import { useState } from 'react'
import style from './Projects.module.css'
import styleF from './ProjectChild/ProjectFocus/ProjectFocus.module.css'
import { ProjectCard } from './ProjectChild/ProjectCard'
import burnoutRadar from '../../assets/images/BurnoutTracker.png'
import saveIt from '../../assets/images/SaveIt.png'
import projet from '../../assets/images/imgProjet.png'
import maquetteEnsemble from '../../assets/images/imgMaquetteEnsemble.png'
import maquettePage from '../../assets/images/imgMaquettePage.png'

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
                sections={[
                    {
                        title:"LE PROJET",
                        content: (
                            <div className={styleF.saveitProjet}>
                                <div className={styleF.text}>
                                    <p>Save it ! est né lors d'un Hackathon de 3 jours organisé par Interface3, après deux mois de formation. Le défi : proposer une application web utile à des femmes en situation de précarité, autour du thème de la finance.</p> 
                                    <p>J'ai proposé l'idée d'un outil de gestion budgétaire centré sur la prévention des achats impulsifs. Avant chaque achat, l'utilisatrice est guidée à travers un questionnaire pour évaluer si elle en a vraiment besoin. Pour rendre l'expérience plus engageante, mes camarades de la section jeux vidéos ont enrichi le concept avec un système de récompenses : chaque achat auquel on renonce fait gagner des items à son avatar.</p>
                                </div>
                                <figure>
                                    <img src={projet}/>
                                    <figcaption>Aperçu des résultats du questionnaire tel que prévu dans la maquette</figcaption>
                                </figure>
                            </div>
                        )
                    },
                    { 
                        title: "MON RÔLE", 
                        content: (
                            <div className={styleF.saveitRole}>
                                <div className={styleF.textScreen}>
                                    <figure>
                                        <img src={maquetteEnsemble} alt="Vue d'ensemble de la maquette"/>
                                        <figcaption>Vue d'ensemble de la maquette Figma</figcaption>
                                    </figure>
                                    <div className={styleF.text}>
                                        <p>Au sein de l'équipe, je me suis principalement chargée de la conception UX/UI du projet. J'ai réalisé l'intégralité de la maquette Figma, en définissant l'architecture du site, le parcours utilisateur et l'identité visuelle. J'ai également contribué à l'intégration HTML et CSS, avant que cette partie soit reprise par mes camarades de la section backend pour être intégrée dans Symfony.</p> 
                                        <p>Cette expérience m'a permis de mieux appréhender l'importance de la phase de conception en amont du développement, et de mesurer l'écart qui peut exister entre un design prévu et sa réalité technique.</p>
                                    </div>
                                </div>
                                <div className={styleF.screens}>
                                    <figure>
                                        <img src={maquettePage} alt="Page version maquette"/>
                                        <figcaption>Page version maquette</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={saveIt} alt="Page version site"/>
                                        <figcaption>Page version site</figcaption>
                                    </figure>
                                </div>
                    
                </div>
                        )
                    },
                    {
                        title: "BILAN",
                        content: (
                            <div className={styleF.saveitBilan}>
                                <p>Ce Hackathon a été riche en apprentissages, parfois à la dure. C'était ma toute première expérience avec GitHub en équipe, et nous avons vite réalisé l'importance de communiquer chaque modification pour éviter les conflits de code.</p>
                                <p>J'ai aussi appris à lâcher prise sur la perfection : j'ai perdu un temps précieux à vouloir reproduire fidèlement ma maquette Figma pixel par pixel, alors que nous n'avions pas encore toutes le niveau technique pour y parvenir. Accepter de s'adapter à la réalité du moment est une compétence en soi.</p>
                                <p>Enfin, avec le recul, je répartirais mieux les rôles au sein de l'équipe. Certaines se sont retrouvées submergées pendant que d'autres n'avaient plus rien à faire, ce qui aurait pu être évité avec une meilleure organisation en amont.</p>
                            </div>
                        )
                    }
                ]}
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
                siteUrl="https://burnouttracker.vercel.app/"
                gitHubUrl="https://github.com/Pecorinow/BurnoutRadar.git"/>
        </section>
    )
}