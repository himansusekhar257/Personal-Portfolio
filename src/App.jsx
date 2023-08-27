import Education from "./components/Education/Education";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Skill from "./components/Skill/Skill";
import Work from "./components/Work/Work";
import Hero from "./components/hero/Hero";
import css from './styles/app.module.scss';
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
     <Header/>
      <Hero/>
      <Experties/>
      <Work/>
      <Skill/>
      <Portfolio/>
      <Education/>
      <Footer/>
  </div>
};

export default App;
