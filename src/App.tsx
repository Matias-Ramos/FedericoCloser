import Detail from './pages/cdv/detail/Detail'
import Footer from './pages/cdv/footer/Footer'
import NavHeader from './pages/cdv/header/NavHeader'
import Leaders from './pages/cdv/leaders/Leaders'
import Products from './pages/cdv/products/Products'
import Purpose from './pages/cdv/purpose/Purpose'
import Testimonials from './pages/cdv/testimonials/Testimonials'
import Intro from './pages/fede/introduction/Intro'

const App = () => {
  return (
    <>
    <NavHeader />
    <Intro />
    <Purpose />
    <Detail />
    <Leaders />
    <Products />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
