// BTS Grid
import { Container, Row, Col } from "react-bootstrap"
// Icons
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
// Components
import Links from "./Links"
// Style
const footerStyle = "bg-dark text-light p-4"
const rowStyle = "mt-5 pt-5 mt-lg-0 "
const colStyle = "d-flex flex-column"
const iconsCtStyle = "d-flex justify-content-center justify-content-lg-end align-items-lg-center gap-3"

const Footer = () => (
  <footer className={footerStyle}>
    <Container>
      <Row className={rowStyle}>

        <Col className={colStyle}>
          <Links />
        </Col>

        <Col className={iconsCtStyle}>
          <FaFacebook />
          <FaTwitter />
          <FaTiktok />
          <FaInstagram />
        </Col>
      </Row>
    </Container>
  </footer>
)
export default Footer