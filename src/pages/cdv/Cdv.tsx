import Detail from "./detail/Detail"
import Footer from "../../components/footer/Footer"
import Leaders from "./leaders/Leaders"
import Products from "./products/Products"
import Purpose from "./purpose/Purpose"
import TestimonialsCdv from "./testimonials/TestimonialsCdv"

const Cdv = () => (
  <>
    <main>
      <div id="firstBackground">
        <Purpose />
        <Detail />
      </div>
      <Leaders />
      <Products />
      <TestimonialsCdv />
    </main>
    <Footer />
  </>
)
export default Cdv