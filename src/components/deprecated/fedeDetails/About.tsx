// BTS
import { Container, Row, Col } from "react-bootstrap"
// Components
import Header from "./Header"
import Metrics from "./Metrics"
import CtaBtn from "../../ctaBtn/CtaBtn"
import fedeImg from "/federico/profile-pic_2.png"
// Styles
const rowStyle="justify-content-around"
const txtStyle = "d-flex flex-column justify-content-evenly my-4 my-lg-0"

const About = () => {
  return (
    <section id="about">
        <Container>
            <Row className={rowStyle}>
                <Col xs={11} lg={4}>
                    <img src={fedeImg} alt="Imagen de Federico Santos" />
                </Col>
                <Col xs={12} lg={7} xl={6} xxl={5} className={txtStyle}>
                    <Header />
                    <Metrics />
                    <CtaBtn text="Hablemos!" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default About