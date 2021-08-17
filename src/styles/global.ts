import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,600&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    position: relative;
    font-family: 'poppins', sans-serif;
  }

  ::selection {
    background-color: #1b1b1b;
    color: #fff;
  }
`

export default GlobalStyles