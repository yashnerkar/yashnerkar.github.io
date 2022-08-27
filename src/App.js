import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import MediaQuery from 'react-responsive'
import Temp from './components/Temp';
import ResponsiveNav from './components/responsive/ResponsiveNav'
import Navbar from "./components/Nav.jsx";
import Home from './components/Home';
import About from './components/about/About';
import Footer from './components/Footer';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Global from './components/Globalstyles';
import Loading from './components/preloader/Loading';
function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [currActive, setCurrActive] = useState(window.location.hash.split('#/')[1]);

  // console.log(currActive);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <>


        <Router>
          {loading ? <Loading /> :
            <>

              <MediaQuery minWidth={993}>
                <Navbar currActive={currActive} />
              </MediaQuery>
              <MediaQuery maxWidth={992}>
                <ResponsiveNav />
              </MediaQuery>
              <Routes>

                <Route path="/" element={<Home setCurrActive={setCurrActive} />} />
                <Route path="/about" element={<About setCurrActive={setCurrActive} />} />
                <Route path="/projects" element={<Project setCurrActive={setCurrActive} />} />
                <Route path="/contact" element={<Contact setCurrActive={setCurrActive} />} />
              </Routes>
              <MediaQuery minWidth={992}>
                <Footer />
              </MediaQuery>
            </>
          }
        </Router>

      </>
    </div >
  );
}

export default App;
