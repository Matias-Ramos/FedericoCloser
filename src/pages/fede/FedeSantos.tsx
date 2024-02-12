import About from "./aboutFede/About"
import Footer from "../../components/footer/Footer"
import Intro from "./introduction/Intro"
import Pitch from "./pitch/Pitch"
import TestimonialsFede from "./testimonials/TestimonialsFede"

const FedeSantos = () => {
  return (
    <>
    <main>
      <Intro />
      <About />
      <TestimonialsFede />
      <Pitch />
    </main>
    <Footer />
    </>
  )
}
export default FedeSantos