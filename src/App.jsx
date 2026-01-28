import NavBar from "./Components/NavBar/NavBar"
import './shared/tailwind.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Calorias from "./pages/Calorias"
import Agua from "./pages/Agua"
import Sono from "./pages/Sono"
import Treino from "./pages/Treino"
function App() {

  return (
    <BrowserRouter>
      <div className="flex">
        <NavBar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Calorias" element={<Calorias />} />
        <Route path="/Agua" element={<Agua/>} />
        <Route path="/Sono" element={<Sono />}/>
        <Route path="/Treino" element={<Treino/>}/>
      </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
