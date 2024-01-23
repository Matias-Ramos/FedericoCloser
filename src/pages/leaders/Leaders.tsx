// BTS
import { Container, Row, Col } from "react-bootstrap";
// Components
import CardsMapper from "./CardsMapper";

const Leaders = () => {
  return (
    <section>
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2>Líderes del Campamento</h2>
                </Col>
            </Row>
            <Row className="gap-3 flex-nowrap">
                <CardsMapper />
            </Row>
        </Container>
    </section>
  )
}
export default Leaders