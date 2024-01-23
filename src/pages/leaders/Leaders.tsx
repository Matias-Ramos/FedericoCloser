import { Container, Row, Col } from "react-bootstrap";
import CardsMapper from "./CardsMapper";

const Leaders = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col>
                    <h2>Líderes del Campamento</h2>
                </Col>
            </Row>
            <Row>
                <CardsMapper />
            </Row>
        </Container>
    </section>
  )
}
export default Leaders