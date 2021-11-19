import './App.css';
import NavBar from './Components/Navigation/Navigation';
import Competences from './Components/Competences/Competences';
import Acceuil from './Components/Acceuil/Acceuil';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="general">
      <NavBar />
      <Acceuil />
      <Competences />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App;
