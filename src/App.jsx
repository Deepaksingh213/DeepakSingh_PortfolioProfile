
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import MainPage from './components/MainPage';
import Hero from './pages/Hero';
import Project from './pages/Project';
import Skills from './pages/Skill';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Footer from './components/Footer';
import CustomNavbar from "./components/CustomNavbar";

function App() {
 
  return (
    <>
      <Router>
      <CustomNavbar/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contact />} />
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default App
