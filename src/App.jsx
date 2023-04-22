import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Destination, Crew, Technology, Layout } from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
