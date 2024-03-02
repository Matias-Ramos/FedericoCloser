// Icons
import { IconContext } from "react-icons";
import { BsChatDotsFill } from "react-icons/bs";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from "../../../components/variants";
// Style
const containerStyling = 'd-flex w-100 align-items-center justify-content-center justify-content-lg-start mb-lg-4 h2andIcon';
const animationCtStyling = "z-2 d-flex align-items-center justify-content-center justify-content-lg-start gap-3";
const h2style = "m-0 position-relative";

const Header = () => (
    <div className={containerStyling}>
        <div className="blueBackg"></div>

        <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={animationCtStyling}
        >

            <h2 className={h2style}>
                Testimonios
            </h2>       
            <IconContext.Provider value={{ size: "2rem", color: "white", className: "mb-1" }}>
                <BsChatDotsFill />
            </IconContext.Provider>

        </motion.div>

    </div>
)

export default Header