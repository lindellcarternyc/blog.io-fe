import GlobalStyles from './styles/global'
import Layout from './layout/Layout'

import HomePage from './pages/Home/HomePage'
import EditorPage from './pages/Editor/EditorPage'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        {/* <HomePage /> */}
        <EditorPage />
      </Layout>
    </div>
  )
}

export default App