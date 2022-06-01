import React from 'react';
// Import React Router
import { Routes, Route, useLocation } from 'react-router-dom';
// Import Animations (let framermotion know that the component is being mounted/dismounted)
// Important for exit animation
import { AnimatePresence } from 'framer-motion';
// Import GlobalStyle
import GlobalStyle from './components/GlobalStyle';
// Import Nav
import Nav from './components/Nav';
// Import Pages
import AboutSection from './pages/AboutSection';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';

// TODO: media queries for different screens!
// rename the app in the tab
// add a logo for the tab?
// fix being able to scroll up

const App = () => {
  // For Framermotion to know on which page we are and when there should be animation
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      {/* Make sure the view starts at the top whenever the page changes */}
      <Nav />
      {/* Wait for the exit animation to finish before the enter animation to start */}
      <AnimatePresence exitBeforeEnter>
        {/* location and key are for framermotion */}
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutSection />} />
          <Route exact path="/work" element={<MyWork />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
