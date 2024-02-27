import Footer from "../../components/footer/Footer"
import AboutFede from "./aboutFede/AboutFede"
import Pitch from "./lastPitch/Pitch"
import TestimonialsFede from "./testimonials/TestimonialsFede"
import InitialPitch from "./initialPitch/InitialPitch"

const FedeSantos = () => {
  return (
    <>
    <main>
      <AboutFede />
      <InitialPitch />
      <TestimonialsFede />
      <Pitch />
    </main>
    <Footer />
    </>
  )
}
export default FedeSantos