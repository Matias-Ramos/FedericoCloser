// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Logo from '../../../components/Logo';
import BtnGroup from './BtnGroup';
// Style
const rowStyle='d-flex justify-content-center justify-content-lg-between'
const btnGroupColStyle = 'd-flex justify-content-center flex-column ps-lg-5'
const btnGroupSpanStyle = 'd-block text-center text-lg-start d-md-inline '


const NavHeader = () => {
  return (
    <header>
        <Container>
            <Row className={rowStyle}>

                <Col xs={5} md={2}>
                    <Logo />
                </Col>

                <Col className={btnGroupColStyle} xs={12} md={7} lg={6} xxl={5}>
                    <span className={btnGroupSpanStyle}>
                        Estas viendo:
                    </span>
                    <BtnGroup />
                </Col>

            </Row>
        </Container>
    </header>
  )
}
export default NavHeader