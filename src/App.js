import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotels/Hotel';
import List from './pages/list/List';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/hotels" element={<List />} /> 
        <Route path ="hotels/:id" element ={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App