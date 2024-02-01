import { Container, Row, Col } from "react-bootstrap";
import ProductsMapper from "./ProductsMapper";
const h2style = "m-0 z-2 position-relative";
const Products = () => {
  return (
    <section id="products">
        <Container>
            <Row>
                <Col className="h2col">
                  <div className="blueBackg"></div>
                  <h2 className={h2style}>Productos & Servicios</h2>
                </Col>
            </Row>
            <ProductsMapper />
        </Container>
    </section>
  )
}
export default Products