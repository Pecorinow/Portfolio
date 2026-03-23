import styles from "./Contact.module.css";
import {ContactForm} from "./ContactForm/ContactForm";

export const Contact = () => {

    return (
        <section id="contact" className={styles.contact}>
            <h2>CONTACT</h2>

            <div className={styles.containerContact}>
                <div className={styles.introForm}>
                    <p>Mon profil vous intéresse, ou vous souhaitez me poser une question ? Laissez moi un message, et je vous recontacterai au plus vite !</p>
                    <ContactForm/>
                </div>
            </div>
            
        </section>
    )
}