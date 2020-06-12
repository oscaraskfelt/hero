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
import BoardController from './components/boardController/boardController'
import About from './components/about/about'

function App() {

  return (
    <ContextProvider>
      <Theme>
        <Router>
          <Header />
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <BoardController/> 
              <Board />
            </Route>
          </Switch>
        </Router>
      </Theme>
    </ContextProvider>
  );
}

export default App