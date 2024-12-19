import Header from './components/header';
import Home from './components/home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/experience';
import Skills from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <>
      <Header/>
      <Home />
      <About/>
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
