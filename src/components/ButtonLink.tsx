import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonLink = styled(Link)`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  text-decoration: none;
  text-transform: capitalize;
`

export default ButtonLink