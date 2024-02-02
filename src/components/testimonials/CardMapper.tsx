import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { IoIosArrowDown } from "react-icons/io";
import CustomToggle from './CustomToggle';
import Carousel from './Carousel';
import { Testimonial } from '../../classes/testimonialType';

// Styling
const entityStyling = { display: "block", width: "100%", marginLeft: "25px" }
const cardStyling = {  backgroundColor: "rgba(255, 255, 255,0.1)", textShadow: "2px 2px 4px white", marginBottom: "1rem" }

const CardMapper = ({testimonialList} : {testimonialList: Testimonial[]}) => {
    return (
        <>
            {testimonialList.map((testimonial) => (
                <Card
                    key={testimonial.id}
                    style={cardStyling}
                >
                    {/* Closed button text */}
                    <Card.Header className='p-0'>
                        <CustomToggle eventKey={testimonial.id}>
                            <span style={entityStyling}>
                                {testimonial.entity}
                            </span>
                            <IoIosArrowDown />
                        </CustomToggle>
                    </Card.Header>

                    {/* Open button text */}
                    <Accordion.Collapse eventKey={testimonial.id.toString()}>
                        <Card.Body>
                            <Carousel testimonial={testimonial}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </>
    )
}
export default CardMapper