import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a href=""className='navbar-brand'>ADJ-DEMO</a>
      </div>
      <div className='collapse navbar-collapse'>
        <ul className='nav-item'>
          <a href="" className='nav-link active'>Home</a>
        </ul>

      </div>

      </nav>
      <div className='container mt-5'>
        <h2>Inicio</h2>
        <hr />
        <button className='btn btn-success'>Llamar a mi API</button>
      </div>
      
    </>
  )
}

export default App
