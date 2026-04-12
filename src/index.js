import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => (
  <div>
    <h1>Página não encontrada!!!</h1>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
