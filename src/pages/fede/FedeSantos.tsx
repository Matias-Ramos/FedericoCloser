import Footer from "./footer/Footer"
import AboutFede from "./aboutFede/AboutFede"
import Pitch from "./lastPitch/LastPitch"
import Testimonials from "./testimonials/Testimonials"
import InitialPitch from "./initialPitch/InitialPitch"
import Signature from "./signature/Signature"

const FedeSantos = () => (
  <>
    <main>
      <InitialPitch />
      <AboutFede />
      <Testimonials />
      <Pitch />
    </main>
    <Footer />
    <Signature />
  </>
)
export default FedeSantos