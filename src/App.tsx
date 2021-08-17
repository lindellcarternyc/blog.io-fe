import GlobalStyles from './styles/global'
import Layout from './layout/Layout'

import HomePage from './pages/Home/HomePage'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <HomePage />
      </Layout>
    </div>
  )
}

export default App