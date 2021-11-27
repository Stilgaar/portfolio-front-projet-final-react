import './App.css';
import NavBar from './Components/Navigation/Navigation';
import Competences from './Components/Competences/Competences';
import Acceuil from './Components/Acceuil/Acceuil';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="general">
      <NavBar />
      <Acceuil />
      <Portfolio />
      <Competences />     
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
