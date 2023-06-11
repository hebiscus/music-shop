import './styles/App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import { cdData, vinylData } from './components/productsData';
import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/cds' element={<Products products={cdData} />}/>
          <Route path='/vinyls' element={<Products products={vinylData} />}/>
          <Route path='/cds/:productTitle' element={<Product products={cdData} />}/>
          <Route path='/vinyls/:productTitle' element={<Product products={vinylData} />}/>
      </Routes>
    </>
  );
}

export default App;
