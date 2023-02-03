import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Home/Navbar'
import Voting from './pages/Home/Vote'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/journalism-spectrum/' element={<Home />} />
          <Route path='/journalism-spectrum/vote' element={<Voting />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
