import { useState, useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoughtProductsContext } from '../App';
 
const NavIcon = styled(Link).attrs({
  id: "sidebar-icon",
})`
  height: clamp(1.875rem, 0.962vw + 1.659rem, 2.813rem);
  width: clamp(1.875rem, 0.962vw + 1.659rem, 2.813rem);
  margin-top: 10px;
  align-self: end;
  margin-right: 10px;
`;
 
const SidebarNav = styled.nav.attrs({
  id: "sidebar-content",
})`
  background: #15171c7d;
  width: 40%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${props => props.$sidebar ? '0' : '-100%'};
  transition: 350ms;
  z-index: 10;
`;
 
const SidebarWrap = styled.div.attrs({
  className: "sidebar-wrapper",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Sidebar = () => {
    const {boughtProducts, deleteFromCart} = useContext(BoughtProductsContext);
    const sumTotal = boughtProducts.reduce(function (accumulator, obj) {return accumulator + Number(obj.price)}, 0);
    const [sidebar, setSidebar] = useState(false);
   
    const showSidebar = () => setSidebar(!sidebar);
   
    return (
      <>  <button className='toogle-cart-btn'>
          <FontAwesomeIcon icon={faBasketShopping} style={{color: "#ffffff",}} onClick={showSidebar} />
          </button>
        <SidebarNav $sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#" className='sidebar-icon'>
                <FontAwesomeIcon icon={faBasketShopping} style={{color: "#ffffff",}} onClick={showSidebar} />
              </NavIcon>
              {boughtProducts.map((product, index) => {
                return <div key={index} className='boughtProduct-container'>
                  <p>{product.title}</p>
                  <div className="bought-style">
                    <p>{`${product.price} $`}</p>
                    <button onClick={() => deleteFromCart(product)}>Delete</button>
                  </div> 
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