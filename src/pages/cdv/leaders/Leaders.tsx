// BTS
import { Container, Row, Col } from "react-bootstrap";
// Components
import CardsMapper from "./CardsMapper";
// Dinamic styles
import classNames from "classnames";
import useMediaQuery from '@mui/material/useMediaQuery';
// Styles
const h2rowStyle = "mb-3"
const h2style = "m-0 z-2 position-relative";


const Leaders = () => {
    
    const isMobile = useMediaQuery('(max-width:991px)');
    const getCardsClasses = () => {
        return classNames("gap-4 gap-lg-3 mt-5", {
            "flex-nowrap": isMobile === false,
        });
    };

    return (
        <section id="leaders">
            <Container>
                <Row className={h2rowStyle}>
                    <Col className="h2col">
                        <div className="blueBackg"></div>
                        <h2 className={h2style}>
                            Líderes del Campamento
                        </h2>
                    </Col>
                </Row>
                <Row className={getCardsClasses()}>
                    <CardsMapper />
                </Row>
            </Container>
        </section>
    )
}
export default Leaders