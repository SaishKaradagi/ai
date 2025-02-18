// import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Roadmap from './pages/Roadmap'
import Home from './pages/Home'


function App() {

  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/roadmap' element={<Roadmap/>}></Route>
    </Routes>
    </>

  )
}

export default App
