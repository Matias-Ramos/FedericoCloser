// Data
import products from "./productList";
// BTS
import { Container } from "react-bootstrap";
// Components
import Header from "./Header";
import Card from "./Card";

const Products = () => (
  <section id="products">
    <Container>
      <Header />

      {products.map( product => (
        <Card
          key={product.title}
          title={product.title}
          img={product.img}
          description={product.description}
        />  
      ))}

    </Container>
  </section>
)

export default Products