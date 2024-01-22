import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../components/Logo';
import BtnGroup from './BtnGroup';

const NavHeader = () => {
  return (
    <header>
        <Container fluid>
            <Row className='d-flex justify-content-center justify-content-lg-between'>
                <Col xs={5} md={3}>
                    <Logo />
                </Col>
                <Col xs={12} md={8} lg={9} className='d-flex justify-content-center flex-column '>
                    <span className='d-block text-center text-lg-start d-md-inline '>Acerca de:</span>
                    <BtnGroup />
                </Col>
            </Row>
        </Container>
    </header>
  )
}
export default NavHeader