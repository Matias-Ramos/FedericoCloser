// BTS
import { Container } from "react-bootstrap";
// Components
import ProductsMapper from "./ProductsMapper";
import Header from "./Header";
import NiceAndEasy from "./NiceAndEasy";

const Products = () => (
  <section id="products">
    <Container>
      <Header />
      <NiceAndEasy />
      <ProductsMapper />
    </Container>
  </section>
)

export default Products