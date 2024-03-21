// BTS
import { Container, Row, Col } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/ctaBtn/CtaBtn"
// Animation
import { motion } from 'framer-motion';
import { pulse } from "../../../components/variants";
// Style
const rowStyle="d-flex justify-content-center";
const colStyle="d-flex flex-column";

const Pitch = () => {
  return (
    <section id="lastPitch" className="text-center">
        <Container>
            <Row className={rowStyle}>
                <Col xs={12} sm={11} lg={8} xxl={5} className={colStyle}>
                    <span id="mainPhrase">
                        DESCUBRE EL PODER DE IMPLANTAR UN SISTEMA DE VENTAS TAN <b>SENCILLO Y EFECTIVO</b> QUE DESTROCE LOS LIMITES DE TU FACTURACIÓN.
                    </span>
                    <motion.div
                        variants={pulse}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once:true }}
                        className="mt-3 d-flex justify-content-center"
                    >
                        <CtaBtn text="Quiero toda la información" />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Pitch