// BTS
import { Container, Row } from 'react-bootstrap';
// Components
import Text from './Text';
import CallToAction from './Cta';
import CardMapper from './CardMapper';
// Styling
const txtStyle = 'd-flex justify-content-lg-center';
const ctaStyle = 'd-flex flex-row align-items-center text-center py-2 mt-5 gap-2 gap-lg-0';
const glassmorphism = {
  background: 'rgba(74, 144, 226, 0)',
  boxShadow: '0 3px 5px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(1px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
};


const Detail = () => {
  return (
    <section>
        <Container>
            <Row className={txtStyle}>
                <Text />
            </Row>
            <Row className={ctaStyle} style={glassmorphism}>
                <CallToAction />
            </Row>
        </Container>
    </section>
  )
}
export default Detail