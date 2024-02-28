// BTS Grid
import { Container, Row, Col } from "react-bootstrap"
// Icons
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
// Components
import Links from "./Links"
import { useLocation } from "react-router-dom"
// Style
const footerStyle = "bg-dark text-light"
const colStyle = "d-flex flex-column text-lg-start mb-3 mb-lg-0"
const iconsCtStyle = "d-flex justify-content-center justify-content-lg-end align-items-lg-center gap-3"

const Footer = () => {
  
  const location = useLocation();
  const rowStyle = `${location.pathname==="/cdv" ? "mt-5 pt-5" : "pt-4"} mt-lg-0`

  return(
    <footer className={footerStyle}>
      <Container>
        <Row className={rowStyle}>

          <Col xs={12} lg={6} className={colStyle}>
            <Links />
          </Col>

          <Col xs={12} lg={6} className={iconsCtStyle}>
            <FaFacebook />
            <FaTwitter />
            <FaTiktok />
            <FaInstagram />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer