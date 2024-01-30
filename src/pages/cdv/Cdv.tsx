import Detail from "./detail/Detail"
import Footer from "./footer/Footer"
import Leaders from "./leaders/Leaders"
import Products from "./products/Products"
import Purpose from "./purpose/Purpose"
import TestimonialsCdv from "./testimonials/TestimonialsCdv"

const Cdv = () => {
  return (
    <>
      <main>
        <Purpose />
        <Detail />
        <Leaders />
        <Products />
        <TestimonialsCdv />
      </main>
      <Footer />
    </>
  )
}
export default Cdv