// BTS
import { Container } from "react-bootstrap";
// Components
import ProductsMapper from "./ProductsMapper";
import Header from "./Header";

const Products = () => (
  <section id="products">
    <Container>
      <Header />
      <ProductsMapper />
    </Container>
  </section>
)

export default Products