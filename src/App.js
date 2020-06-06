import React from 'react'
import './App.css'
import {ContextProvider} from './context/context'
import Theme from './theme/theme'
import Test from './components/test'

function App() {


  return (
    <ContextProvider>
      <Theme>
        
      </Theme>
    </ContextProvider>
  );
}

export default App