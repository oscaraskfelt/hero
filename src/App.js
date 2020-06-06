import React from 'react'
import './App.css'
import { ContextProvider } from './context/context'
import Theme from './theme/theme'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test from './components/test'
import Header from './components/header/header'

function App() {

  return (
    <ContextProvider>
      <Theme>
        <Router>
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/">
              <p>Home</p>
            </Route>
          </Switch>
        </Router>
      </Theme>
    </ContextProvider>
  );
}

export default App