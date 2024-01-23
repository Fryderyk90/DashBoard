import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './api/microsoftGraph/authConfig.ts'
import { GraphProvider } from './api/microsoftGraph/GraphClientContext.tsx'


const queryClient = new QueryClient()
const msalInstance = new PublicClientApplication(msalConfig);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MsalProvider instance={msalInstance}>
        <GraphProvider>
          <App />
        </GraphProvider>
      </MsalProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
