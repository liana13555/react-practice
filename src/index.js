import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Example } from './components/Example';
import { ThemeProvider } from './context/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >
      <Example />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);