// BTS
import { Row, Col } from "react-bootstrap";
// Styles
const h2style = "m-0 z-2 position-relative";

const Header = () => (
    <Row>
        <Col className="h2col">
            <div className="blueBackg"></div>
            <h2 className={h2style}>Productos & Servicios</h2>
        </Col>
    </Row>
)

export default Header