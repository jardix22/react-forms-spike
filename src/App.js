import React from 'react';
import { Box, Input } from 'theme-ui'
import logo from './logo.svg';
import './App.css';

import Field from './ui/Form/Field'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Box>
          <Field label='Full name'>
            <Input name='name' />
          </Field>
        </Box>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
