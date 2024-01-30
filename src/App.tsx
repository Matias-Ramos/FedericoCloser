// Components
import NavHeader from './components/header/NavHeader'
import Cdv from './pages/cdv/Cdv'
import FedeSantos from './pages/fede/FedeSantos'
// Nav
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/"               element={<Cdv />} />
        <Route path="/cdv"            element={<Cdv />} />
        <Route path="/FedericoSantos" element={<FedeSantos />} />
      </ Routes>
    </BrowserRouter>
  )
}

export default App
