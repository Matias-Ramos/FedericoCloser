// Data
import testimonialList from "./testimonialList";
// BTS
import { Col, Container, Row } from 'react-bootstrap';
// Components
import Accordion from 'react-bootstrap/Accordion';
import CardMapper from './accordion/CardMapper';
import Header from './Header';
import Logo from '../../../components/Logo';
// Styling
const h2rowStyling = 'd-flex justify-content-center'
const h2containerStyling = 'd-flex align-items-end justify-content-between mb-3 h2col position-relative';
const logoStyle = "testimonialLogo"
// Grid sys.
const breakpoints = {  md: 10, lg: 12, xl: 10, xxl: 9 };


const Testimonials = () => (
    <section id="testimonials">
        <Container>
            <Row className={h2rowStyling}>
                <Col {...breakpoints} xl={12} className={h2containerStyling}>
                    <Header />
                </Col>

                <Col {...breakpoints} className='mt-4 mt-lg-3 '>
                    <Accordion>
                        <CardMapper testimonialList={testimonialList} />
                    </Accordion>
                </Col>
                
                <Col xs={6} sm={3} md={2} className={logoStyle}>
                    <Logo color="blue" />
                </Col>

            </Row>
        </Container>
    </section>
);

export default Testimonials;
