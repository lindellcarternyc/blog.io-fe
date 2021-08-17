import styled from 'styled-components'
import Navbar from './Navbar/Navbar'

interface LayoutProps {
  children?: JSX.Element | JSX.Element[]
}

const ContentWrapper = styled.div`
  margin-top: 60px;
`
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Navbar />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </div>
  )
}

export default Layout