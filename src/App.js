
import Menu from './menu';
import Manchete from './manchetes';
import Sobre from './sobre';
import Contato from './contato';
import './contato.scss';
import Novidades from './novidade';
import Exportacao from './exportacao';
import Incendio from './incendio';
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div >
      <Menu />
      <Routes>
        <Route index element={<Manchete />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Novidades" element={<Novidades/>} />
        <Route path="Contato" element={<Contato/>} />
        <Route path="exportacao" element={<Exportacao/>}/>
        <Route path="incendio" element={<Incendio/>}/>
      </Routes>
    </div>
  );
}

export default App;
