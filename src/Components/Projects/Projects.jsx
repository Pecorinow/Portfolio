import { useState } from 'react'
import style from './Projects.module.css'
import styleF from './ProjectChild/ProjectFocus/ProjectFocus.module.css'
import { ProjectCard } from './ProjectChild/ProjectCard'
import burnoutTracker from '../../assets/images/BurnoutTracker.png'
import saveIt from '../../assets/images/SaveIt.png'
import saveitProjet from '../../assets/images/SaveitProjet.png'
import saveitMaquetteEnsemble from '../../assets/images/SaveitMaquetteEnsemble.png'
import saveitMaquettePage from '../../assets/images/SaveitMaquettePage.png'
import btInfos from '../../assets/images/BtInfos.png'
import btPsys from '../../assets/images/BtPsys.png'
import btQuestionnaire from '../../assets/images/BtQuestionnaire.png'
import btResultats from '../../assets/images/BtResultats.png'

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
                                    <p><span className={styleF.bold}>Save it !</span> est né lors d'un Hackathon de 3 jours organisé par Interface3, après deux mois de formation. Le défi : proposer une application web utile à des femmes en situation de précarité, autour du thème de la finance.</p> 
                                    <p>J'ai proposé l'idée d'un <span className={styleF.bold}>outil de gestion budgétaire centré sur la prévention des achats impulsifs</span>. Avant chaque achat, l'utilisatrice est guidée à travers un questionnaire pour évaluer si elle en a vraiment besoin. Pour rendre l'expérience plus engageante, mes camarades de la section jeux vidéos ont enrichi le concept avec un système de récompenses : chaque achat auquel on renonce fait gagner des items à son avatar.</p>
                                </div>
                                <figure>
                                    <img src={saveitProjet} alt= "Maquette de la page de résultat du questionnaire" loading="lazy"/>
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
                                        <img src={saveitMaquetteEnsemble} alt="Vue d'ensemble de la maquette" loading="lazy"/>
                                        <figcaption>Vue d'ensemble de la maquette Figma</figcaption>
                                    </figure>
                                    <div className={styleF.text}>
                                        <p>Au sein de l'équipe, je me suis principalement chargée de la <span className={styleF.bold}>conception UX/UI du projet</span>. J'ai réalisé l'intégralité de la maquette Figma, en définissant l'architecture du site, le parcours utilisateur et l'identité visuelle. J'ai également contribué à l'<span className={styleF.bold}>intégration HTML et CSS</span>, avant que cette partie soit reprise par mes camarades de la section backend pour être intégrée dans Symfony.</p> 
                                        <p>Cette expérience m'a permis de mieux appréhender l'importance de la phase de conception en amont du développement, et de mesurer l'écart qui peut exister entre un design prévu et sa réalité technique.</p>
                                    </div>
                                </div>
                                <div className={styleF.screens}>
                                    <figure>
                                        <img src={saveitMaquettePage} alt="Page version maquette" loading="lazy"/>
                                        <figcaption>Page version maquette</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={saveIt} alt="Page version site" loading="lazy"/>
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
                                <p>Ce Hackathon a été riche en apprentissages, parfois à la dure. C'était ma toute première expérience avec GitHub en équipe, et nous avons vite réalisé <span className={styleF.bold}>l'importance de communiquer chaque modification</span> pour éviter les conflits de code.</p>
                                <p>J'ai aussi appris à lâcher prise sur la perfection. J'ai perdu un temps précieux à vouloir reproduire fidèlement ma maquette Figma pixel par pixel, alors que nous n'avions pas encore toutes le niveau technique pour y parvenir. <span className={styleF.bold}>Accepter de s'adapter à la réalité du moment</span> a sans doute été mon plus gros défi.</p>
                                <p>Enfin, avec le recul, je répartirais mieux les rôles au sein de l'équipe. Certaines se sont retrouvées submergées pendant que d'autres n'avaient plus rien à faire, ce qui aurait pu être évité avec une <span className={styleF.bold}>meilleure organisation en amont</span>.</p>
                            </div>
                        )
                    }
                ]}
            />
            <ProjectCard
                isReversed={true}
                image={burnoutTracker}
                alt="Page d'accueil du projet Burnout Tracker"
                title="Burn-out Tracker"
                languages="HTML, CSS, JavaScript"
                date="Novembre 2025"
                description={[
                    "Premier projet réalisé en autonomie à Interface3.",
                    "Outil de diagnostic de burnout, avec questionnaire personnalisé, recherche de psychologues par spécialité et localisation via une API fictive.",
                    "Compétence développée : Développement front-end (HTML, CSS, JavaScript) avec manipulation de données structurées et filtrage dynamique."]}
                siteUrl="https://burnouttracker.vercel.app/"
                gitHubUrl="https://github.com/Pecorinow/BurnoutTracker.git"
                sections={[
                    {
                        title:"LE PROJET",
                        content: (
                            <div className={styleF.btProjet}>
                                <div className={styleF.text}>
                                    <p><span className={styleF.bold}>Burn-out Tracker</span> est le premier projet que j'ai réalisé entièrement en autonomie, dans le cadre de ma formation. L'objectif : concevoir un site web de A à Z en HTML, CSS et JavaScript en deux semaines, avec au minimum trois pages et l'intégration d'une API.</p> 
                                    <p>J'ai choisi de créer un <span className={styleF.bold}>outil de diagnostic du burn-out</span>, sujet qui me tient particulièrement à cœur. Le site propose un questionnaire de 35 questions qui évalue le risque de l'utilisateur et <span className={styleF.bold}>identifie le type de burn-out concerné</span> : professionnel, parental, personnel, relationnel ou post-masking. Ce dernier type est souvent méconnu, et l'un des partis pris du projet est justement de rappeler que le burn-out ne se limite pas à la sphère professionnelle.</p>
                                </div>
                                <figure>
                                    <img src={burnoutTracker} alt="Page d'accueil du site Burn-out Tracker" loading="lazy"/>
                                    <figcaption>Page d'accueil du site Burn-out Tracker</figcaption>
                                </figure>
                            </div>
                        )
                    },
                    { 
                        title: "MA DÉMARCHE", 
                        content: (
                            <div className={styleF.btDemarche}>
                                <figure>
                                    <img src={btInfos} alt="Explication du burn-out relationnel" loading="lazy"/>
                                    <figcaption>Focus et explications sur le burn-out relationnel en page d'accueil</figcaption>
                                </figure>
                                <div className={styleF.text}>
                                    <p>Concevoir un site destiné à des personnes potentiellement en difficulté impliquait une réflexion particulière sur l'<span className={styleF.bold}>expérience utilisateur</span>. Je voulais un <span className={styleF.bold}>site accueillant, qui ne brusque pas et ne perde pas un utilisateur déjà éprouvé</span>.</p> 
                                    <p>J'ai opté pour une interface épurée, sans surcharge visuelle, tout en utilisant des tons chauds pour apporter de la douceur. Le design a été pensée en fonction du public cible : quelqu'un de stressé ne doit pas avoir à chercher ses informations ni à faire face à une interface froide ou complexe. La page de résultat du test propose une redirection vers la <span className={styleF.bold}>page de recherche de thérapeutes</span> ainsi que le <span className={styleF.bold}>numéro de SOS Burn-out</span>, et le site présente également une <span className={styleF.bold}>page d'accueil explicative</span> sur chaque type de burn-out.</p>
                                </div>
                                                
                            </div>
                        )
                    },

                    { 
                        title: "POINT TECHNIQUE", 
                        content: (
                            <div className={styleF.btPointTechnique}>
                                <div className={styleF.textScreen}>
                                    <div className={styleF.text}>
                                        <p>Côté JavaScript, le défi principal a été la <span className={styleF.bold}>conception du questionnaire</span> et de son système de résultats. La  <span className={styleF.bold}>fonction recupReponses()</span> orchestre à elle seule trois sous-fonctions pour collecter les réponses, calculer les scores, restituer les résultats de façon cohérente et y appliquer les classes correspondantes. La page de recherche de psychologues s'appuie quant à elle sur une <span className={styleF.bold}>API fictive</span> de thérapeutes que j'ai entièrement construite en JavaScript, filtrée dynamiquement selon les spécialités sélectionnées.</p> 
                                        <p>Côté <span className={styleF.bold}>accessibilité</span>, j'ai réalisé une refonte complète du site après sa première version : intégration des attributs aria (label, expanded, controls, live), audit avec l'outil d'accessibilité WAVE, et suppression des redondances identifiées.</p>
                                    </div>
                                    <figure>
                                        <img src={btPsys} alt="Page de recherche d'un thérapeute par catégorie de burn-out et code postal" loading="lazy"/>
                                        <figcaption>Résultat de la recherche de thérapeute par catégorie de burn-out et code postal</figcaption>
                                    </figure>
                                </div>
                                <div className={styleF.screens}>
                                    <figure>
                                        <img src={btQuestionnaire} alt="Questions posées dans le questionnaire" loading="lazy"/>
                                        <figcaption>Morceau du questionnaire, avec cinq inputs de type radio par question.</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={btResultats} alt="Résultats du test pour les burn-outs professionnel et parental" loading="lazy"/>
                                        <figcaption>Exemple de résultat du test pour les catégories "professionnel" et "parental", avec une moyenne sur cinq et les conseils liés à ce résultat.</figcaption>
                                    </figure>
                                </div>
                    
                </div>
                        )
                    },
                    {
                        title: "BILAN",
                        content: (
                            <div className={styleF.btBilan}>
                                <p>Ce projet m'a confrontée à la <span className={styleF.bold}>réalité du développement JavaScript</span>, car des actions qui semblaient simples en théorie se sont révélées bien plus complexes à implémenter. C'est une leçon que j'ai apprise à mes dépens, mais qui m'a permis de mieux évaluer la charge de travail réelle d'un projet par la suite !</p>
                                <p>L'accessibilité m'a également donné une leçon importante : j'ai dû retravailler en profondeur la structure HTML pour rendre la navigation plus intuitive, alors qu'une réflexion en amont aurait évité ce travail en double. <span className={styleF.bold}>Penser accessibilité dès la phase de conception</span> fait partie des réflexes que j'ai développés depuis.</p>
                                <p>Ce projet m'a finalement appris quelque chose sur ma façon de travailler : je m'investis pleinement à partir du moment où je comprends précisément à qui je m'adresse. Avant d'avoir cerné mon public cible, je me sentais perdue sur la façon de présenter les choses. <span className={styleF.bold}>Identifier l'utilisateur final</span> n'est pas qu'une étape UX, c'est ce qui aiguille toutes les décisions qui suivent.</p>
                            </div>
                        )
                    }
                ]}/>
        </section>
    )
}