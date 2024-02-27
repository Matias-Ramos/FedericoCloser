// BTS
import { Row, Col } from "react-bootstrap";
// Style
const rowStyle = "productRow justify-content-center position-relative";
const imgColStyle = "d-flex justify-content-center imgCol z-2";
const txtColStyle = "d-flex flex-column justify-content-center txtCol z-2";
const productNameStyle = "text-center text-lg-start fw-bold productName my-2 my-lg-0";
const bckgTxtStyle= "d-none d-lg-block backgroundText";
// images
import cdv from '/products/logo.png';

const NiceAndEasy = () => {
  return (
    <Row className={rowStyle}>

    <Col xs={12} className={bckgTxtStyle}>
        Rendimientos
    </Col>

    <Col xs={12} lg={4} className={imgColStyle}>
        <img
            src={cdv}
            className="w-100"
            alt={`Imagen del Campamento de ventas`}
        />
    </Col>

    <Col xs={12} lg={6} className={txtColStyle}>
        <span className={productNameStyle}>
          Rápido, simple, fácil.
        </span>

        <div>
          <span className="mb-3 d-block">Entendimos que el vendedor promedio no suele tener estudios avanzados, por eso procuramos hacer algo tan simple que funcione con un jovencito de secundaria (Como nuestro director de ventas al comenzar).</span>
          <span className="mb-3 d-block">Las estructuras sofisticadas, los textos complejos, las fórmulas matemáticas...
          Los vendedores NO LAS ENTIENDEN, Y POR ESO NO LAS RECUERDAN, NI MUCHO MENOS APLICAN.</span>
          <span className="mb-3 d-block">Por eso, nuestro producto es para cualquier vendedor, no es requisito ser "Director ejecutivo del área de Finanzas Internacionales con un IQ de 182" de la Harvard University, no.</span>
          <span className="mb-3 d-block">Enseñamos a vender en un idioma que se entienda, entretenga, emocione, se recuerde, que motive, y sobre todo que lo SE APLIQUE. </span>
          <span>Ya no dejes tus facturación librada al azar, apaga las velas a tus santos y deja que nosotros nos hagamos cargo de la situación. Llegó la hora de que todo potencial cliente deje de ser potencial y cierre el trato de una buena vez. </span>
        </div>
    </Col>
    <Col className="hrCol" xs={12}>
        <hr />
    </Col>
</Row>
  )
}
export default NiceAndEasy











