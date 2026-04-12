import { Route, Routes } from 'react-router-dom'
import About       from './pages/AboutPage/About'
import Homepage    from './pages/HomePage/HomePage'
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'

function App() {
  return (
    <>
      {/* Thin progress bar fixed at top — visible on all pages */}
      <ScrollProgressBar />

      <Routes>
        <Route path="/"      element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
