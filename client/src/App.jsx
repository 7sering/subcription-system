import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"


import {Routes, Route} from "react-router-dom"

function App() {

  return (
   <>
   <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>

  </Routes>
   </>
  )
}

export default App
