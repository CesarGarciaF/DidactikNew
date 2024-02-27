import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Routes, Route } from 'react-router-dom';
import CreateForm from './Componentes/CreateForm/CreateForm';
import Predeterminado from './Componentes/Default/Predeterminado';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
          <Routes>
              <Route path='/' element={<CreateForm/>}/>
              <Route path='*' element={<Predeterminado/>}/>
              <Route path='home' element={<Home/>}/> 
              <Route path='about' element={<About/>}/> 
              <Route path='createform' element={<CreateForm/>}/>
          </Routes>
      </div>
    </PrimeReactProvider>
  );
}
export default App;
