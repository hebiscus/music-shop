import './styles/App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Cds from './components/Cds';
import Vinyls from './components/Vinyls';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/cds' element={<Cds />}/>
          <Route path='/vinyls' element={<Vinyls />}/>
      </Routes>
    </>
  );
}

export default App;
