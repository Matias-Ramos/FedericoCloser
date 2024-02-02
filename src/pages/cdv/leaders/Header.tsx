// BTS
import { Col } from "react-bootstrap"
// Style
const h2style = "w-100 z-2 d-block position-relative";

const Header = () => (
    <Col className="h2col">
        <div className="blueBackg"></div>
        <h2 className={h2style}>
            Líderes del Campamento
        </h2>
    </Col>
)

export default Header