import { useEffect, useRef } from 'react';
import styles from './ProjectFocus.module.css';

export const ProjectFocus = ({ onClose, title, sections, isOpen }) => {
    const panelRef = useRef(null);

    useEffect(() => {
         if (!isOpen) return;

        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    return () => {
        document.body.style.overflow = '';
    };
}, [isOpen]);

    return (
        <div className={`${styles.panel} ${isOpen ? styles.open : ''}`} ref={panelRef}>
            <button 
                type="button" 
                onClick={onClose}
                aria-label="Fermer le panneau"
                className={styles.closeBtn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
            </button>

            <div className={styles.containerFocus}>
                <h2>{title}</h2>

                {sections && sections.map((section, index) => (
                    <div key={index} className={styles.section}>
                        <h3>{section.title}</h3>
                        {section.content}

                        {/* <h3>{section.title}</h3>
                        <div>
                            {section.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            {section.img && (
                                <img src={section.img} alt={section.imgAlt || ""} />
                            )}
                        </div> */}
                    </div>
                ))}

            {/* <div  key={index} className={styles.section}>
                <h3>Le projet</h3>
                <div className={styles.contentSection}>
                    <div className={styles.text}>
                        <p>Save it ! est né lors d'un Hackathon de 3 jours organisé par Interface3, après deux mois de formation. Le défi : proposer une application web utile à des femmes en situation de précarité, autour du thème de la finance.</p> 
                        <p>J'ai proposé l'idée d'un outil de gestion budgétaire centré sur la prévention des achats impulsifs. Avant chaque achat, l'utilisatrice est guidée à travers un questionnaire pour évaluer si elle en a vraiment besoin. Pour rendre l'expérience plus engageante, mes camarades de la section jeux vidéos ont enrichi le concept avec un système de récompenses : chaque achat auquel on renonce fait gagner des items à son avatar.</p>
                    </div>
                    <figure>
                        <img src="source-img-1" alt="description-img-1"/>
                        <figcaption>Description de l'image 1</figcaption>
                    </figure>
                </div>
            </div>

            <div key={index} className={styles.section}>
                <h3>Mon rôle</h3>
                <div className={styles.contentSection}>
                    <div className={styles.textScreen}>
                        <figure>
                            <img src="source-img-2" alt="description-img-2"/>
                            <figcaption>Description de l'image 2</figcaption>
                        </figure>
                        <div className={styles.text}>
                            <p>Au sein de l'équipe, je me suis principalement chargée de la conception UX/UI du projet. J'ai réalisé l'intégralité de la maquette Figma, en définissant l'architecture du site, le parcours utilisateur et l'identité visuelle. J'ai également contribué à l'intégration HTML et CSS, avant que cette partie soit reprise par mes camarades de la section backend pour être intégrée dans Symfony.</p> 
                            <p>Cette expérience m'a permis de mieux appréhender l'importance de la phase de conception en amont du développement, et de mesurer l'écart qui peut exister entre un design prévu et sa réalité technique.</p>
                        </div>
                    </div>
                    <div className={styles.screens}>
                        <figure>
                            <img src="source-img-3" alt="description-img-3"/>
                            <figcaption>Description de l'image 3</figcaption>
                        </figure>
                        <figure>
                            <img src="source-img-4" alt="description-img-4"/>
                            <figcaption>Description de l'image 4</figcaption>
                        </figure>
                    </div>
                    
                </div>
            </div>

            <div key={index} className={styles.section}>
                <h3>Bilan</h3>
                <div className={styles.text}>
                    <p>Ce Hackathon a été riche en apprentissages, parfois à la dure. C'était ma toute première expérience avec GitHub en équipe, et nous avons vite réalisé l'importance de communiquer chaque modification pour éviter les conflits de code.</p>
                    <p>J'ai aussi appris à lâcher prise sur la perfection : j'ai perdu un temps précieux à vouloir reproduire fidèlement ma maquette Figma pixel par pixel, alors que nous n'avions pas encore toutes le niveau technique pour y parvenir. Accepter de s'adapter à la réalité du moment est une compétence en soi.</p>
                    <p>Enfin, avec le recul, je répartirais mieux les rôles au sein de l'équipe. Certaines se sont retrouvées submergées pendant que d'autres n'avaient plus rien à faire, ce qui aurait pu être évité avec une meilleure organisation en amont.</p>
                </div>
            </div> */}
            </div>
            
        </div>
        
    );
};