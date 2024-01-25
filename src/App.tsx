import Detail from './pages/cdv/detail/Detail'
import Footer from './pages/cdv/footer/Footer'
import NavHeader from './pages/cdv/header/NavHeader'
import Leaders from './pages/cdv/leaders/Leaders'
import Products from './pages/cdv/products/Products'
import Purpose from './pages/cdv/purpose/Purpose'
import Testimonials from './pages/cdv/testimonials/Testimonials'
import About from './pages/fede/aboutFede/About'
import Intro from './pages/fede/introduction/Intro'
import Pitch from './pages/fede/pitch/Pitch'

const App = () => {
  return (
    <>
    <NavHeader />
    <Purpose />
    <Detail />
    <Leaders />
    <Products />
    <Testimonials />
    <Footer />
    <Intro />
    <About />
    <Pitch />
    </>
  )
}

export default App
