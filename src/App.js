
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Partner from './components/Partners/Partner';
import Aboutus from './components/Aboutus/Aboutus';
import Bestservice from './components/Bestservice/Bestservice';
import Marketing from './components/Marketing/Marketing';
import Marquee from './components/Marquee/Marquee';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import Navbar2 from './components/Navbar2/Navbar2';
import Work from './components/WorkProcess/Work';
import Testinomial from './components/Testinomials/Testinomial';
import Blogs from './components/Blogs/Blogs';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    
    <div>
      
      
      <Navbar2 id='section1'></Navbar2>
      <Banner id='home'></Banner>
      <Partner id='partner'></Partner>
      <Aboutus id='about'></Aboutus>
      <Bestservice id='service'></Bestservice>
      <Marketing id='marketing'></Marketing>
      <Marquee id='marquee'></Marquee>
      <Team id='team'></Team>
      <Projects id='project'></Projects>
      <Work id='work'></Work>
      <Testinomial id='testi'></Testinomial>
      <Blogs id='blog'></Blogs>
      
      <Footer id='contact'></Footer>

    

      

    </div>
    
  );
}

export default App;
