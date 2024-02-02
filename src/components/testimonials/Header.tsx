// Icons
import { IconContext } from "react-icons";
import { BsChatDotsFill } from "react-icons/bs";
// Style
const containerStyling = 'd-flex w-100 align-items-center justify-content-center justify-content-lg-start gap-3 mb-lg-4';
const h2style = "m-0 z-2 position-relative";

const Header = () => (
    <div className={containerStyling}>

        <div className="blueBackg"></div>

        <h2 className={h2style}>
            Testimonios
        </h2>

        <IconContext.Provider value={{ 
            size: "2rem",
            color:"white",
            className: "z-2 mb-1" }}
        >
            <BsChatDotsFill />
        </IconContext.Provider>
    </div>
)

export default Header