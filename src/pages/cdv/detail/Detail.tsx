// BTS
import { Container, Row } from 'react-bootstrap';
// Components
import Text from './Text';
import CallToAction from './Cta';
// Styling
const txtStyle = 'd-flex justify-content-lg-center';
const ctaStyle = 'd-flex flex-row align-items-center text-center py-5';

const Detail = () => {
  return (
    <section>
        <Container>
            <Row className={txtStyle}>
                <Text />
            </Row>
            <Row className={ctaStyle}>
                <CallToAction />
            </Row>
        </Container>
    </section>
  )
}
export default Detail