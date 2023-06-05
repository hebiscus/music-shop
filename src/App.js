import './styles/App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Cds from './components/Cds';
import Vinyls from './components/Vinyls';
import Navbar from './components/Navbar';
import backgroundVideo from "./resources/drumsHD.mp4"

function App() {
  return (
    <>
      <video id="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
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
