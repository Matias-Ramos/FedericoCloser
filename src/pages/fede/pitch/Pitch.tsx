// BTS
import { Container, Row, Col } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/ctaBtn/CtaBtn"
// Animation
import { motion } from 'framer-motion';
import { pulse } from "../../variants";
// Style
const rowStyle="d-flex justify-content-center";
const colStyle="d-flex flex-column";

const Pitch = () => {
  return (
    <section id="pitch">
        <Container>
            <Row className={rowStyle}>
                <Col xs={12} sm={11} lg={9} xl={6} xxl={5} className={colStyle}>
                    <h2>Domina el arte de vender</h2>
                    <span>
                        Descubre cómo nuestras técnicas de ventas pueden impulsar tu éxito.<br />
                        ¡Conversemos y transformemos juntos tu carrera!
                    </span>
                    <motion.div
                        variants={pulse}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once:true }}
                    >
                        <CtaBtn text="Hablemos!" handleClick={()=>{}} />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Pitch