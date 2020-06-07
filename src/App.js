import React from 'react'
import './App.css'
import { ContextProvider } from './context/context'
import Theme from './theme/theme'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Board from './components/board/board'

function App() {

  return (
    <ContextProvider>
      <Theme>
        <Router>
          <Header />
          <Nav />
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/">
              <Board />
            </Route>
          </Switch>
        </Router>
      </Theme>
    </ContextProvider>
  );
}

export default App