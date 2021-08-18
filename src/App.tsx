import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './styles/global'
import Layout from './layout/Layout'

import HomePage from './pages/Home/HomePage'
import EditorPage from './pages/Editor/EditorPage'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/editor" exact component={EditorPage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App