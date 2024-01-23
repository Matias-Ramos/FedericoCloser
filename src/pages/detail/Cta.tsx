// BTS Grid
import { Col } from "react-bootstrap"
// Components
import Button from '@mui/material/Button';

const Cta = () => (
    <>

        <Col xs={12} lg={5}>
            <span>¿ Querés saber más ?</span>
        </Col>

        <Col xs={12} lg={2}>
            <span>{"------>"}</span>
        </Col>

        <Col xs={12} lg={5}>
            <Button variant="outlined">
                Descargar PDF
            </Button>
        </Col>

    </>
)
export default Cta