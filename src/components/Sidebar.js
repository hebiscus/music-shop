import { useState, useContext, createContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import shoppingBasket from "../resources/icons/shopping-basket.svg";
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
    const boughtProducts = useContext(BoughtProductsContext);
    console.log(boughtProducts)
    const [sidebar, setSidebar] = useState(false);
   
    const showSidebar = () => setSidebar(!sidebar);
   
    return (
      <>
        <img src={shoppingBasket} alt='cart-icon' onClick={showSidebar}/>
        <SidebarNav $sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <img src={shoppingBasket} alt='cart-icon' onClick={showSidebar}/>
              </NavIcon>
              {/* {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })} */}
            </SidebarWrap>
        </SidebarNav>
      </>
    );
  };
   
  export default Sidebar;