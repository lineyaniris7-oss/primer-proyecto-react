import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ejemplos de Componentes en React.
        </p>
      </header>
      <PrimerComponente />
      <hr/>
      <br/>
      <SegundoComponente />
    </div>
  );
}

export default App;