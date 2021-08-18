import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarLink = styled(Link)`
  padding: 10px;
  margin-left: 10px;
  text-decoration: none;
  text-transform: none;
  color: #000;
`

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  background-color: #fff;
  z-index: 9;

  ul {
    display: flex;
    list-style: none;
  }
`
  
const Navbar = () => {
  return (
    <NavbarWrapper>
      <img src="img/logo.png" alt="logo" />
      <ul>
        <li>
          <NavbarLink to="/">home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/editor">editor</NavbarLink>
        </li>
      </ul>
    </NavbarWrapper>
  )
}

export default Navbar  