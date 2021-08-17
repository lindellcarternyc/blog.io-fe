import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  border: 1px solid red;
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

    li a {
      padding: 10px;
      margin-left: 10px;
      text-decoration: none;
      text-transform: none;
      color: #000;
    }
  }
`
  
const Navbar = () => {
  return (
    <NavbarWrapper>
      <img src="img/logo.png" alt="logo" />
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/editor">editor</a>
        </li>
      </ul>
    </NavbarWrapper>
  )
}

export default Navbar  