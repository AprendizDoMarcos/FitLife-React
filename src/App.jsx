import Main from "./Components/Main/Main"
import NavBar from "./Components/NavBar/NavBar"
import './shared/tailwind.css'
function App() {

  return (
    <div className="flex">
      <NavBar />
      <Main />
    </div>
  )
}

export default App
