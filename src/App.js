import React from 'react';
// Import React Router
import { Routes, Route } from 'react-router-dom';
// Import GlobalStyle
import GlobalStyle from './components/GlobalStyle';
// Import Nav
import Nav from './components/Nav';
// Import Pages
import About from './pages/About';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';

// TODO: media queries for different screens!

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/work" element={<MyWork />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
};

export default App;
