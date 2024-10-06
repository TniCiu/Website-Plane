import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from "./AppRouter"
import AppBarComponent from "./Components/AppBar"
const App = () => {

  return(
  <Router>
    <AppBarComponent/>
    <AppRouter/>
  </Router>

  )
}

export default App