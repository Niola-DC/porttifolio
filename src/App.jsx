

import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeView from './component2/HomeView'

function App() {

  return (
    <Router>
      <HomePage />
      {/* <HomeView /> */}
    </Router>
  )
}

export default App
