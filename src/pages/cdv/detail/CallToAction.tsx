// BTS Grid
import { Col, Row } from "react-bootstrap"
// Components
import Chevron from "../../../components/chevron/Chevron";
import { Button } from "@mui/material";
// Styles
const rowStyle = "align-items-center py-4 py-lg-0 bg-light w-100 blueBorder"
const spanStyle = "d-block text-center"
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
            <Button variant="outlined" onClick={() => { }}>
                Descargar PDF
            </Button>
        </Col>
    </Row>

)
export default CallToAction