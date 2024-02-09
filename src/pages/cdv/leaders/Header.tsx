// BTS
import { Col } from "react-bootstrap";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
// Style
const h2style = "w-100 z-2 d-block position-relative";

const Header = () => (
    <Col className="h2col">
        <div className="blueBackg"></div>
        <motion.h2
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={h2style}
        >
            Líderes del Campamento
        </motion.h2>
    </Col>
)

export default Header