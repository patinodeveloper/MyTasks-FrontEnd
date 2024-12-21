import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Globals.css'
import { MyTasksApp } from './MyTasksApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyTasksApp />
  </StrictMode>,
)
