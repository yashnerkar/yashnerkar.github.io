import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import MediaQuery from 'react-responsive'
import ResponsiveNav from './components/responsive/ResponsiveNav'
import Navbar from "./components/Nav.jsx";
import Home from './components/Home';
import About from './components/about/About';
import Footer from './components/Footer';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Global from './components/Globalstyles';
function App() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <MediaQuery maxWidth={992}>
        <ResponsiveNav />
      </MediaQuery>
      <MediaQuery minWidth={993}>
        <Navbar />
      </MediaQuery>

      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <MediaQuery minWidth={992}>
        <Footer />
      </MediaQuery>

    </div >
  );
}

export default App;
