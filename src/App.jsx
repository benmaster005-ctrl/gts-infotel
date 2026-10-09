import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProNumber from './components/ProNumber';
import ProductSpotlight from './components/ProductSpotlight';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Partners from './components/Partners';
import OnboardingSteps from './components/OnboardingSteps';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import NumeroProPage from './pages/NumeroProPage';
import ContactCenter3CXPage from './pages/ContactCenter3CXPage';
import ProcomNetworkPage from './pages/ProcomNetworkPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

/**
 * Application racine — Gère la navigation entre l'Accueil et les pages
 * dédiées (Numéro PRO, 3CX-Centre de Contacts, Réseau ProCom, À propos, Contact).
 */
export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (window.location.hash === '#numero-pro') return 'numero-pro';
    if (window.location.hash === '#3cx-callcenter') return '3cx-callcenter';
    if (window.location.hash === '#reseau-procom') return 'reseau-procom';
    if (window.location.hash === '#a-propos') return 'about';
    if (window.location.hash === '#contact-page' || window.location.hash === '#contact') return 'contact';
    return 'home';
  });

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  // Synchronisation avec l'URL hash (supporte le bouton Précédent/Suivant)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#numero-pro') {
        setCurrentRoute('numero-pro');
      } else if (window.location.hash === '#3cx-callcenter') {
        setCurrentRoute('3cx-callcenter');
      } else if (window.location.hash === '#reseau-procom') {
        setCurrentRoute('reseau-procom');
      } else if (window.location.hash === '#a-propos') {
        setCurrentRoute('about');
      } else if (window.location.hash === '#contact-page' || window.location.hash === '#contact') {
        setCurrentRoute('contact');
      } else if (!window.location.hash || window.location.hash === '#' || window.location.hash.startsWith('#solutions') || window.location.hash.startsWith('#pourquoi')) {
        setCurrentRoute('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route) => {
    setCurrentRoute(route);
    if (route === 'numero-pro') {
      window.location.hash = 'numero-pro';
    } else if (route === '3cx-callcenter') {
      window.location.hash = '3cx-callcenter';
    } else if (route === 'reseau-procom') {
      window.location.hash = 'reseau-procom';
    } else if (route === 'about') {
      window.location.hash = 'a-propos';
    } else if (route === 'contact') {
      window.location.hash = 'contact-page';
    } else {
      if (
        window.location.hash === '#numero-pro' ||
        window.location.hash === '#3cx-callcenter' ||
        window.location.hash === '#reseau-procom' ||
        window.location.hash === '#a-propos' ||
        window.location.hash === '#contact-page'
      ) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        onContact={openContact}
        currentRoute={currentRoute}
        onNavigate={navigate}
      />

      <main>
        {currentRoute === 'numero-pro' ? (
          <NumeroProPage
            onContact={openContact}
            onNavigateHome={() => navigate('home')}
          />
        ) : currentRoute === '3cx-callcenter' ? (
          <ContactCenter3CXPage
            onContact={openContact}
            onNavigateHome={() => navigate('home')}
          />
        ) : currentRoute === 'reseau-procom' ? (
          <ProcomNetworkPage
            onContact={openContact}
            onNavigateHome={() => navigate('home')}
          />
        ) : currentRoute === 'about' ? (
          <AboutPage
            onContact={openContact}
            onNavigateHome={() => navigate('home')}
          />
        ) : currentRoute === 'contact' ? (
          <ContactPage
            onNavigateHome={() => navigate('home')}
          />
        ) : (
          <>
            <Hero onContact={openContact} />
            <Benefits />
            <ProNumber />
            <ProductSpotlight onContact={openContact} onNavigate={navigate} />
            <Solutions onContact={openContact} />
            <WhyChooseUs />
            <Partners />
            <OnboardingSteps onContact={openContact} />
            <FAQ />
          </>
        )}
      </main>

      <Footer onContact={openContact} onNavigate={navigate} />
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
    </>
  );
}
