import { useRef } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main className="flex-grow">
        <Hero onServicesClick={() => scrollToSection(servicesRef)} />
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
    </div>
  );
}

export default App;
