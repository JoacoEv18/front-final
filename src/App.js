import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Error from './pages/error';
import { Api } from './pages/Api';
import { Formulario } from './pages/Formulario';
import { Productos } from './pages/Productos';
/* import { Navbar } from './componentes/Navbar'; */
import { Layout } from './componentes/Layout';
import { Otro } from './pages/Otro';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='/about' element={<About />} />
          <Route path='/api' element={<Api />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/otro' element={<Otro />} />
          <Route path='/productos' element={<Productos />} />
        </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
