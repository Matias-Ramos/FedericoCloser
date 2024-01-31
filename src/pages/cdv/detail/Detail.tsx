// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
// import Text from './Text';
import CallToAction from './CallToAction';
import CardMapper from './CardMapper';
// Styling
const txtStyle = 'd-flex justify-content-start';
const glassmorphism = {
  background: 'rgba(74, 144, 226, 0)',
  boxShadow: '0 3px 5px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(1px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
};
const firstColStyle = "d-flex flex-column justify-content-center"


const Detail = () => {
  return (
    <section id="detail">
        <Container>
            <Row className={txtStyle}>

              <Col xs={12} lg={7} className={firstColStyle}>
                  <h2>[Detalle]</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem non magnam, voluptatibus cum quaerat adipisci ratione ab impedit facere tempore deserunt ducimus pariatur, provident.</p>
              </Col>

              <Col xs={12}>
                <CardMapper />
              </Col>

              <Col xs={12} style={glassmorphism} className='d-flex align-items-center justify-content-center mt-4'>
                <CallToAction />
              </Col>
            </Row>

        </Container>
    </section>
  )
}
export default Detail