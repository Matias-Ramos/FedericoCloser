// BTS
import { Container, Row, Col } from "react-bootstrap";
// Components
import DevCredits from './DevCredits';
// Style
const colStyle = "d-inline-block w-lg-50 text-center"

const Signature = () => (
  <section id="signatureSection">
    <Container fluid>
      <Row>
        <Col className={colStyle}>
        </Col>
        <Col className={colStyle}>
          <DevCredits />
        </Col>
      </Row>
    </Container>    
  </section>
);

export default Signature;
