// Components
import NavHeader from './pages/fede/header/NavHeader'
import FedeSantos from './pages/fede/FedeSantos'
// Nav
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/"               element={<FedeSantos />} />
        <Route path="/cdv"            element={<FedeSantos />} />
        <Route path="/FedericoSantos" element={<FedeSantos />} />
      </ Routes>
    </BrowserRouter>
  )
}

export default App
