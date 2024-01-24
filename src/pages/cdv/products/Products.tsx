import { Container, Row, Col } from "react-bootstrap";
import ProductsMapper from "./ProductsMapper";

const Products = () => {
  return (
    <section id="products">
        <Container>
            <Row>
                <Col>
                    <h2>Productos & Servicios</h2>
                </Col>
            </Row>
            <ProductsMapper />
        </Container>
    </section>
  )
}
export default Products