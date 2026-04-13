import { useState, useEffect } from 'react'
import './App.css'
import { AccessibilityMenu } from './Components/Accessibility/Accessibility';
import { Nav } from './Components/Nav/Nav';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';

function App() {
  
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(()=>{
      const homeSection = document.getElementById('home');

      const observer = new IntersectionObserver(([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
        
      }, { rootMargin: '-50% 0px 0px 0px' });

      observer.observe(homeSection);

      return () => observer.disconnect();
  },  [] );

  useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.altKey && e.key === '1') {
            document.querySelector('header button')?.focus();
        }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
}, []);

  return (
    <>

      <a href="#header" className="skip-link btnDark" onFocus={() => {}}>
          Retour au menu : Alt+1
      </a>
       <header id="header">
        <Nav isHomeVisible={isHomeVisible}/> 
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
