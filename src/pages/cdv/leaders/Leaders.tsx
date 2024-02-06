// BTS
import { Container, Row } from "react-bootstrap";
// Components
import CardsMapper from "./CardsMapper";
// Dinamic styles
import classNames from "classnames";
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "./Header";
// Styles
const h2rowStyle = "mb-3"


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
                    <Header />
                </Row>
                <Row className={getCardsClasses()}>
                    <CardsMapper />
                </Row>
            </Container>
        </section>
    )
}
export default Leaders