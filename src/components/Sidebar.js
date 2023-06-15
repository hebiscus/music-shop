import { useState, useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoughtProductsContext } from '../App';
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #15171c7d;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${props => props.$sidebar ? '0' : '-100%'};
  transition: 350ms;
  z-index: 10;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
    const {boughtProducts, deleteFromCart} = useContext(BoughtProductsContext);
    console.log(boughtProducts);
    const sumTotal = boughtProducts.reduce(function (accumulator, obj) {return accumulator + Number(obj.price)}, 0);
    console.log(sumTotal)
    const [sidebar, setSidebar] = useState(false);
   
    const showSidebar = () => setSidebar(!sidebar);
   
    return (
      <>  <button className='toogle-cart-btn'>
          <FontAwesomeIcon icon={faBasketShopping} style={{color: "#ffffff",}} onClick={showSidebar} />
          </button>
        <SidebarNav $sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <FontAwesomeIcon icon={faBasketShopping} style={{color: "#ffffff",}} onClick={showSidebar} />
              </NavIcon>
              {boughtProducts.map((product, index) => {
                return <div key={index} className='boughtProduct-container'>
                  <h5>{product.title}</h5>
                  <h5>{product.price}</h5>
                  <button onClick={() => deleteFromCart(product)}>Delete</button>  
                </div>
              })}
              <div className='checkout-container'>
                <h4>Grand total: {sumTotal}$</h4>
                <button>Checkout</button>
              </div>
            </SidebarWrap>
        </SidebarNav>
      </>
    );
  };
   
  export default Sidebar;