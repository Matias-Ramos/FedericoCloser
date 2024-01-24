// BTS Grid
import { Col } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/CtaBtn";

const Cta = () => (
    <>

        <Col xs={12} lg={5}>
            <span>¿ Querés saber más ?</span>
        </Col>

        <Col xs={12} lg={2}>
            <span>{"------>"}</span>
        </Col>

        <Col xs={12} lg={5}>
            <CtaBtn text="Descargar PDF" variant="outlined" handleClick={()=>{}} />
        </Col>

    </>
)
export default Cta