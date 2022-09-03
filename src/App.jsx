import './App.css';
import TablaAgenda from './components/TablaAgenda';
import Plantilla from './components/Plantilla';
import Formulario from './components/Form';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import PorIndice from './components/PorIndice';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Plantilla/>}/>
          <Route path="/grilla" element={<TablaAgenda/>}/>
          <Route path="/formulario/:idContact" element={<Formulario/>}/>
          <Route path="/indice/:letra" element={<PorIndice/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
