import { useState } from 'react';
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

/**
 * Application racine — Restauration de l'architecture précédente
 * en conservant le catalogue de solutions enrichi et les partenaires actuels.
 */
export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Navbar onContact={openContact} />
      <main>
        <Hero onContact={openContact} />
        <Benefits />
        <ProNumber />
        <ProductSpotlight onContact={openContact} />
        <Solutions onContact={openContact} />
        <WhyChooseUs />
        <Partners />
        <OnboardingSteps onContact={openContact} />
        <FAQ />
      </main>
      <Footer onContact={openContact} />
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
    </>
  );
}
