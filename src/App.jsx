import React from 'react';
import { NavBarSmall, NavBarLarge } from './components/NavBar';
import Hero from './components/HeroPage'
import CustomCarousel from './components/Carousel';
import StepsStepper from './components/Stepper';
import ChooseUs from './components/Choose';
import Charges from './components/Charges';
import AccordionComponent from './components/Accordion';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBarSmall />
      <NavBarLarge />
      <Hero />
      <CustomCarousel />
      <StepsStepper />
      <ChooseUs />
      <Charges />
      <AccordionComponent />
      <Awards />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
