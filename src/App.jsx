import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AccessibilityMenu } from './Components/Accessibility/Accessibility';
import { Nav } from './Components/Nav/Nav';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';

function App() {
  // Création du state pour savoir si on est sur Home ou non :
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(()=>{
      const homeSection = document.getElementById('home');

      const observer = new IntersectionObserver(([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
        
      }, { rootMargin: '-50% 0px 0px 0px' });

      observer.observe(homeSection);

      return () => observer.disconnect();
  },  [] );

  return (
    <>
       <header>
        <Nav isHomeVisible={isHomeVisible}/> {/* isHomeVisible = prop de la Nav qui reçoit la valeur du state {isHomeVisible}. La prop pourrait s'appeler autrement mais par convention on la nomme comme l'élément qu'elle reçoit. */}
        <AccessibilityMenu/>
       </header>

       <main>
          
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
       </main>
       <footer>
          <span>© 2026 - Caroline Poveda</span>
       </footer>
    </>
  )
}

export default App
