import { Routes, Route, useLocation } from "react-router-dom"
import "./Globals.css"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Services from "./pages/Services/Services"
import Aboutus from "./pages/Aboutus/Aboutus"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const location = useLocation()
  return (
    <>
      <Header/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />  
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
