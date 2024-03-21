// BTS
import { Container, Row, Col } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/ctaBtn/CtaBtn"
import SocMediaMapper from "./socMediaMapper/SocMediaMapper"
// Data
import federico from "./fedeData"
// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../../components/variants"
// Styles
const firstColStyle = "d-flex flex-column justify-content-center introCol"

const AboutFede = () => (
  <motion.section
    id="introduction"
    variants={fadeIn("up")}
    initial="hidden"
    animate="show"
    viewport={{ once: true }}
  >
    <Container>
      <Row>
        <Col xs={12} lg={7} className={firstColStyle}>

          <div id="titles">
            <span> Hola!
              <motion.span
                whileInView={{ rotate: [0, 10, 0, 10, 0] }}
                transition={{ delay: 1.3, repeat: 1, repeatDelay: 2.3 }}
                viewport={{ once: true }}
              >
                👋
              </motion.span>
            </span>
            <h2> Soy Federico Santos </h2>
            <div id="line"></div>
            <span> Estratega experto </span>
          </div>

          <span className="mb-3 mt-1">
            Analicemos tu modelo de negocio, de forma totalmente <u>gratuita</u> y <u>personalizada</u>, en una asesoría de 30' para crear la mejor propuesta posible para tu emprendimiento.
          </span>

          <CtaBtn text="Hablemos!" />

          <SocMediaMapper member={federico} />

        </Col>
        <Col xs={12} lg={5} className="introCol">
          <img src={federico.picture} className="w-100" alt="Imagen Fede Santos" />
        </Col>
      </Row>
    </Container>
  </motion.section>
)
export default AboutFede