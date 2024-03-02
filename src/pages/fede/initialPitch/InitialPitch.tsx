// BTS
import { Container, Row, Col } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/ctaBtn/CtaBtn"
// Data
import fedeImg from '/assets/vectorial-img.svg';
// Style
const sectionStyle = { 
    backgroundImage: `url('/backgrounds/curveLines.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    borderBottom: "1px solid #e3e3ff"
}
const secondColStyle = "text-center d-flex flex-column justify-content-center mt-4 mt-lg-0"
const ctaBtnCtStyle = "w-100 d-flex justify-content-center mt-3"

const InitialPitch = () => (
    <div style={{backgroundColor:"#0055ff"}}>
        <section style={sectionStyle} id="initialPitch">
            <Container>
                <Row>

                    <Col xs={12} lg={5}>
                        {/* free licence for commercial use: https://www.reshot.com/free-vector-illustrations/item/isometric-startup-development-V2B8Q7PS9T/ */}
                        <img src={fedeImg} className="w-100"  alt="Imagen de Fede y equipo" />
                    </Col>

                    <Col xs={12} lg={7} className={secondColStyle}>
                        <h2>DESCUBRE EL <b>PODER</b> DE IMPLANTAR UN SISTEMA DE VENTAS <u>SIMPLE</u></h2>
                        <span>Y TRIPLICA TU FACTURACIÓN EN MENOS DE 90 DÍAS.</span>
                        <span className="d-block">
                            <i>(Sin tener que invertir mas dinero en publicidad)</i>
                        </span>

                        <div className={ctaBtnCtStyle}>
                            <CtaBtn text="Quiero aplicar!" handleClick={()=>{}} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    </div>
  )
export default InitialPitch