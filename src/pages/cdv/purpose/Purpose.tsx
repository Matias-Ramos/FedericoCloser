// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Logo from '../../../components/Logo';
import Text from './Text';
// Style
const sectionStyle = "position-relative"
const txtStyle = "d-flex flex-column justify-content-center text-center text-lg-start"
const logoStyle = "purposeLogo"

const Purpose = () => (
    <section id="purpose" className={sectionStyle}>
        <Container>
            <Row>
                <Col xs={12} lg={8} className={txtStyle}>
                    <Text />
                </Col>
                <Col xs={6} sm={3} lg={4} className={logoStyle}>
                    <Logo color="blue"/>
                </Col>
            </Row>
        </Container>
    </section>
)
export default Purpose