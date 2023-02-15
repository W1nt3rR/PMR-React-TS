import React from 'react'
import ReactDOM from 'react-dom/client'
import { PMRApp } from './components/PMRApp'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PMRApp />
  </React.StrictMode>,
)
