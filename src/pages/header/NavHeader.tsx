// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Logo from '../../components/Logo';
import BtnGroup from './BtnGroup';
// Style
const rowStyle='d-flex justify-content-center justify-content-lg-between'
const btnGroupColStyle = 'd-flex justify-content-center flex-column '
const btnGroupSpanStyle = 'd-block text-center text-lg-start d-md-inline '

const NavHeader = () => {
  return (
    <header>
        <Container fluid>
            <Row className={rowStyle}>

                <Col xs={5} md={3}>
                    <Logo />
                </Col>

                <Col className={btnGroupColStyle} xs={12} md={8} lg={9}>
                    <span className={btnGroupSpanStyle}>
                        Acerca de:
                    </span>
                    <BtnGroup />
                </Col>

            </Row>
        </Container>
    </header>
  )
}
export default NavHeader