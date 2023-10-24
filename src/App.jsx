import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Data from './Component/Data'
import DataItem from './Component/DataItem'


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Data/>}></Route>
        <Route path='/:id' element={<DataItem/>}></Route>
      </Routes>
    </Router>
        
    </>
  )
}

export default App
