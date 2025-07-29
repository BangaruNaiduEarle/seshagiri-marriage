import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import './i18n'; // Remove this line
import { ContentProvider } from './context/ContentContext'; // Import the provider
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <ContentProvider> {/* Wrap App with the provider */} 
      <App />
    </ContentProvider>
    </HelmetProvider>
  </React.StrictMode>,
)