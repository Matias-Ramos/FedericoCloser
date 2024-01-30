// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Logo from '../Logo';
import BtnGroup from './BtnGroup';
import background from '/backgrounds/blue_bckg.png';
// Style
const rowStyle='d-flex justify-content-center justify-content-lg-between'
const btnGroupColStyle = 'd-flex justify-content-center flex-column ps-lg-5'
const btnGroupSpanStyle = 'd-block text-center text-lg-start d-md-inline '

const NavHeader = () => {
  return (
    <header >

        <img id="background" src={background} alt="background" />

        <Container>
            <Row className={rowStyle}>

                <Col xs={5} md={2}>
                    <Logo color="white"/>
                </Col>

                <Col className={btnGroupColStyle} xs={12} md={7} xl={6} xxl={5}>
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