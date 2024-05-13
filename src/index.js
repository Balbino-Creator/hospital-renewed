import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Principal from './paginas/Principal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes basename="/hospital-renewed">
        <Route path="/" element={<Principal/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
