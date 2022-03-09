import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        
      </Menu>
      <RightMenu>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
        <CustomMenu onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </CustomMenu>
      </RightMenu>

      <BurgerNav show={isOpen}>
        <CustomClose onClick={() => setIsOpen(!isOpen)}>
          <CloseIcon />
        </CustomClose>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header

const Container = styled.div`
  min-height: 60px;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    flex-wrap:nowrap;
    padding: 0 10px;
    text-transform: uppercase;

  }
  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-weight: 600;
    flex-wrap: nowrap;
    padding: 0 10px;
    text-transform: uppercase;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
  padding: 20px;
  list-style: none;
  z-index: 16;
  display:flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li{
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
    a{
      font-weight: 600;
    }
  }
  `;

const CustomMenu = styled.div`
cursor: pointer;
`
const CustomClose = styled.div`
cursor: pointer;
display: flex;
align-items: center;
justify-content: flex-end;
`