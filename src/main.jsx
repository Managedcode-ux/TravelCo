import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';

import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    primary: [
      "#fff5e0",
      "#ffe9ca",
      "#ffd199",
      "#ffb863",
      "#ffa840",
      "#ff9618",
      "#ff8f04",
      "#e47b00",
      "#cb6d00",
      "#b15c00"
    ]
  },
  primaryColor: 'orange',
  fontFamily: 'Open-sans',
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider wwithNormalizeCSS theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
