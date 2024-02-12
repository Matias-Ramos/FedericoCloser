import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <Container>
        <Row>
          <Col>
            <div className="mt-5 pt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end gap-3">
              <FaFacebook />
              <FaTwitter /> 
              <FaTiktok />
              <FaInstagram />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer