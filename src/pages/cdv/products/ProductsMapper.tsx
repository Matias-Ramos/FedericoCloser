// BTS
import { Col, Row } from "react-bootstrap";
// Data
import productsList from "./productList";
import CtaBtn from "../../../components/CtaBtn";
// Style
const rowStyle = "productRow justify-content-center position-relative";
const imgColStyle = "d-flex justify-content-center imgCol z-2";
const txtColStyle = "d-flex flex-column justify-content-center txtCol z-2";
const productNameStyle = "text-center text-lg-start fw-bold productName my-2 my-lg-0";
const bckgTxtStyle= "d-none d-lg-block backgroundText";

const ProductsMapper = () => {
    return (
        <>
            {productsList.map((product) => (
                <Row key={product.name} className={rowStyle}>

                    <Col xs={12} className={bckgTxtStyle}>
                        {product.name.split(" ")[0]}
                    </Col>

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

                        <CtaBtn
                            text="Adquirir"
                            variant="contained"
                            handleClick={() => { }} 
                        />
                    </Col>
                    <Col className="hrCol" xs={12}>
                        <hr />
                    </Col>
                </Row>
                ))
            }
        </>
    )
}
export default ProductsMapper