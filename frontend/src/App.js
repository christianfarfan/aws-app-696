import './App.css';
import Contact from './components/Contact';
import Navegation from './components/navegation';
import RegisterUser from './components/RegisterUser';
import Home from './components/Home';
import Consult from './components/consult';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navegation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register_page' element={<RegisterUser/>}></Route>
          <Route path='/contact_page' element={<Contact/>}></Route>
          <Route path='/consult_page' element={<Consult/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
