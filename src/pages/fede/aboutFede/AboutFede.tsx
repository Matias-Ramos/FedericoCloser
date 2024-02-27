// BTS
import { Container, Row, Col } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/ctaBtn/CtaBtn"
import SocMediaMapper from "../../../components/socMediaMapper/SocMediaMapper"
// Data
import fedeArr from "./fedeData"
// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"


const AboutFede = () => {
  return (
    <motion.section
      id="introduction"
      variants={fadeIn("up")}
      initial="hidden"
      animate="show"
      viewport={{once:true}}
      >
      <Container>
        <Row>
          <Col xs={12} lg={7} className="d-flex flex-column justify-content-center introCol">

            <div id="titles">
              <span> Hola! 
                <motion.span
                  whileInView={{rotate:[0,10,0,10,0]}} 
                  transition={{delay:1.3, repeat: 1, repeatDelay: 2.3}}
                  viewport={{once:true}}
                  >
                  👋
                </motion.span> 
              </span>
              <h2> Soy Federico Santos </h2>
              <div id="line"></div>
              <span> Experto vendedor </span>
            </div>

            <p>{fedeArr[0].exp}</p>

            <CtaBtn text="Hablemos!" handleClick={()=>{}} />

            <SocMediaMapper member={fedeArr[0]}/>

          </Col>
          <Col xs={12} lg={5} className="introCol">
            <img src={fedeArr[0].picture} className="w-100" alt="Imagen Fede Santos" />
          </Col>
        </Row>
      </Container>
    </motion.section>
  )
}
export default AboutFede