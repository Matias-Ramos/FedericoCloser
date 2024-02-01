// BTS
import { Col, Row } from "react-bootstrap";
// Data
import productsList from "./productList";
import CtaBtn from "../../../components/CtaBtn";
// Style
const rowStyle = "productRow justify-content-center";
const imgColStyle = "d-flex justify-content-center productCol";
const txtColStyle = "d-flex flex-column justify-content-center productCol";
const productNameStyle = "text-center text-lg-start fw-bold";


const ProductsMapper = () => {
    return (
        <>
            {
            productsList.map(product => (
                <>
                <Row key={product.name} className={rowStyle}>

                    <Col xs={12} lg={4} className={imgColStyle}>
                        <img
                            src={product.image}
                            className="w-100"
                            alt={`Imagen de ${product.name}`}
                        />
                    </Col>

                    <Col xs={12} lg={6} className={txtColStyle}>
                        <span className={productNameStyle}>
                            {product.name}
                        </span>

                        <span className="mb-2">
                            {product.description}
                        </span>

                        <CtaBtn text="Adquirir" variant="contained" handleClick={() => { }} />
                    </Col>
                    <Col className="productCol" xs={12}>
                        <hr />
                    </Col>
                </Row>
                </>
                ))
            }
        </>
    )
}
export default ProductsMapper