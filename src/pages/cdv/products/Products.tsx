// BTS
import { Container } from "react-bootstrap";
// Components
import ProductsMapper from "./ProductsMapper";
import Header from "./Header";
import NewCtaBtn from "../../../components/NewCtaBtn/NewCtaBtn";

const Products = () => (
  <section id="products">
    <Container>
      <NewCtaBtn />
      <Header />
      <ProductsMapper />
    </Container>
  </section>
)

export default Products