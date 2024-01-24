import CarouselBts from 'react-bootstrap/Carousel';
import { Testimonial } from './testimonialList';
// Style
import useMediaQuery from '@mui/material/useMediaQuery';
import classNames from "classnames";

const Carousel = (({ testimonial }: {testimonial : Testimonial}) => {
   
        const isMobile = useMediaQuery('(max-width:991px)');
        const getImgClasses = () => {
            return classNames("d-block ms-auto me-auto", {
              "w-100": isMobile === true,
            });
        };
    
        return (
            <CarouselBts >
                {testimonial.data.map( (evidence, index) => {
                    return(
                        <CarouselBts.Item key={index}>
                            <img
                                src={evidence}
                                className={getImgClasses()}
                                alt="Screenshot del testimonio" 
                            />
                        </CarouselBts.Item>
                    )
                })} 
            </CarouselBts>
        )
});
export default Carousel