// BTS Grid
import { Col, Row } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/CtaBtn";
import Chevron from "../../../components/chevron/Chevron";
// Styles
const rowStyle= "w-100 align-items-center py-4 py-lg-0 bg-light blueBorder"
const spanStyle= "d-block text-center"
const ctaStyle = "d-flex justify-content-center"

const CallToAction = () => (
        <Row className={rowStyle}>

            <Col xs={12} lg={5} >
                <span className={spanStyle}>
                    ¿ Querés saber más ?
                </span>
            </Col>

            <Col xs={12} lg={2} >
                <Chevron />
            </Col>

            <Col xs={12} lg={5} className={ctaStyle}>
                <CtaBtn
                    text="Descargar PDF"
                    variant="outlined"
                    handleClick={() => { }}
                />
            </Col>

        </Row>
)
export default CallToAction