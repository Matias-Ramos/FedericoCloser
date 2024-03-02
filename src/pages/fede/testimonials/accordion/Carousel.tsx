import CarouselBts from 'react-bootstrap/Carousel';
import { Testimonial_T } from '../testimonialType'
// Style
import useMediaQuery from '@mui/material/useMediaQuery';
import classNames from "classnames";

const Carousel = (({ testimonial }: { testimonial: Testimonial_T }) => {

    const isMobile = useMediaQuery('(max-width:991px)');
    const getImgClasses = () => {
        return classNames("d-block ms-auto me-auto", {
            "w-100": isMobile === true,
        });
    };

    return (
        <CarouselBts interval={null}>
            {testimonial.data.map((evidence, index) => {
                return (
                    <CarouselBts.Item key={index}>
                        {
                            evidence.includes('https') ?
                                <iframe
                                    src={evidence}
                                    width="100%"
                                    height="315"
                                    style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                                :
                                <img
                                    src={evidence}
                                    className={getImgClasses()}
                                    alt="Screenshot del testimonio"
                                />
                        }
                    </CarouselBts.Item>
                )
            })}
        </CarouselBts>
    )
});
export default Carousel