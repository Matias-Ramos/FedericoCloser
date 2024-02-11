// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import CallToAction from './CallToAction';
import CardMapper from './CardMapper';
import Text from './Text';
// Styling
const glassmorphism = {
  background: 'rgba(74, 144, 226, 0)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderTop: '1px solid rgba(215, 215, 215, 0.6)',
};
const rowStyle = 'd-flex justify-content-start gap-lg-2';
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