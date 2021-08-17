import Navbar from './Navbar/Navbar'

interface LayoutProps {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout