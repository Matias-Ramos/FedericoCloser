// BTS
import { Container, Row, Col } from "react-bootstrap"
// Components
import CtaBtn from "../../../components/CtaBtn"
// Style
const rowStyle="d-flex justify-content-center";
const colStyle="d-flex flex-column";

const Pitch = () => {
  return (
    <section id="pitch">
        <Container>
            <Row className={rowStyle}>
                <Col xs={12} sm={11} lg={9} xl={6} xxl={5} className={colStyle}>
                    <h2>Domina el arte de vender</h2>
                    <span>
                        Descubre cómo nuestras técnicas de ventas pueden impulsar tu éxito.<br />
                        ¡Conversemos y transformemos juntos tu carrera!
                    </span>
                    <CtaBtn text="Hablemos!" variant="contained" handleClick={()=>{}} />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Pitch