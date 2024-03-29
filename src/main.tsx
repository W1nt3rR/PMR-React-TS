import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './components/AppRouter'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
