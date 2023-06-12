import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import shoppingBasket from "../resources/icons/shopping-basket.svg";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #15171c;
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
    const [sidebar, setSidebar] = useState(false);
   
    const showSidebar = () => setSidebar(!sidebar);
   
    return (
      <>
          <Nav>
            <NavIcon to="#">
                <img src={shoppingBasket} alt='shop' onClick={showSidebar}/>
            </NavIcon>
          </Nav>
          <SidebarNav $sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <img src={shoppingBasket} alt='shop' onClick={showSidebar}/>
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