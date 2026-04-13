import { useEffect, useRef } from 'react';
import styles from './ProjectFocus.module.css';

export const ProjectFocus = ({ onClose, title, sections, isOpen }) => {
    const panelRef = useRef(null);
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if (isOpen && closeBtnRef.current) {
            closeBtnRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
         if (!isOpen) return;

        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                onClose();
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
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
        <div className={`${styles.panel} ${isOpen ? styles.open : ''}`} ref={panelRef} inert={!isOpen}>
            <button 
                ref={closeBtnRef}
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

                      
                    </div>
                ))}

            </div>
            
        </div>
        
    );
};