import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/home-page'
import ResponsiveAppBar from './components/navbar/appbar'

function App() {

  return (
    <BrowserRouter>

      <ResponsiveAppBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
