import React from 'react';
import './App.css';
import {ContextProvider} from './context/context'

function App() {


  return (
    <ContextProvider>
      <div className="App">
      hej
      </div>
    </ContextProvider>
  );
}

export default App;
