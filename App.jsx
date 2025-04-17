import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import CreateBook from './components/CreateBook'
import EditBook from './components/EditBook'

// set up the react router dom
function App() {
  return (
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path="/book" element={<CreateBook/>}/>
    <Route path="/edit/:id" element={<EditBook/>}/>
    
   </Routes>
  )
}

export default App
