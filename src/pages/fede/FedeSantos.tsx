import Footer from "../../components/footer/Footer"
import AboutFede from "./aboutFede/AboutFede"
import Pitch from "./lastPitch/LastPitch"
import TestimonialsFede from "./testimonials/TestimonialsFede"
import InitialPitch from "./initialPitch/InitialPitch"

const FedeSantos = () => {
  return (
    <>
    <main>
      <InitialPitch />  
      <AboutFede />
      <TestimonialsFede />
      <Pitch />
    </main>
    <Footer />
    </>
  )
}
export default FedeSantos