import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App