import { useState } from 'react'

import './App.css'
import Form from './Form'
import { Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
         <Routes>
      <Route path='/' element={<Form/>}/>
    </Routes>
      
    </>
  )
}

export default App
