import './styles/App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import { cdData, vinylData } from './components/productsData';
import Product from './components/Product';
import { useState, createContext } from 'react';

export const BoughtProductsContext = createContext(null);

function App() {
  const [boughtProducts, setBoughtProducts] = useState([]);

  function addToCart(product) {
    if (!boughtProducts.includes(product)) {
      setBoughtProducts([...boughtProducts, product]);
    }
    else {
      return;
    }
  };

  function deleteFromCart(product) {
    const newProducts = boughtProducts.filter(boughtProduct => boughtProduct !== product);
    setBoughtProducts(newProducts);
  }

  return (
    <>
      <BoughtProductsContext.Provider value={{boughtProducts, deleteFromCart}}>
        <Navbar />
      </BoughtProductsContext.Provider>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path='/cds' element={<Products products={cdData} key={'cds'}/>}/>
          <Route path='/vinyls' element={<Products products={vinylData} key={'vinyls'}/>}/>
          <Route path='/cds/:productTitle' element={<Product products={cdData} addToCart={addToCart} />}/>
          <Route path='/vinyls/:productTitle' element={<Product products={vinylData} addToCart={addToCart} />}/>
      </Routes>
    </>
  );
}

export default App;
