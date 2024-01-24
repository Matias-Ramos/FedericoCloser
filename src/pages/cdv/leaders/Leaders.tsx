// BTS
import { Container, Row, Col } from "react-bootstrap";
// Components
import CardsMapper from "./CardsMapper";
// Dinamic styles
import classNames from "classnames";
import useMediaQuery from '@mui/material/useMediaQuery';


const Leaders = () => {
    
    const isMobile = useMediaQuery('(max-width:991px)');
    const getCardsClasses = () => {
        return classNames("gap-3", {
            "flex-nowrap": isMobile === false,
        });
    };

    return (
        <section>
            <Container>
                <Row className="mb-3">
                    <Col>
                        <h2>Líderes del Campamento</h2>
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