// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import CallToAction from './CallToAction';
import CardMapper from './CardMapper';
import Text from './Text';
// Styling
const rowStyle = 'd-flex justify-content-start';
const glassmorphism = {
  background: 'rgba(74, 144, 226, 0)',
  boxShadow: '0 3px 5px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
};
const txtStyle = "d-flex flex-column justify-content-center"
const ctaStyle = 'd-flex align-items-center justify-content-center mt-4'

const Detail = () => {
  return (
    <section id="detail" style={glassmorphism}>
      <Container >
        <Row className={rowStyle}>

          <Col xs={12} lg={7} className={txtStyle}>
            <Text />
          </Col>

          <Col xs={12}>
            <CardMapper />
          </Col>

          <Col xs={12} className={ctaStyle}>
                <CallToAction />
          </Col>

        </Row>
      </Container>
    </section>
  )
}
export default Detail