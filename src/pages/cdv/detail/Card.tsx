// Interface
import { Card_T } from "./cardList"
// Styles
import { IconContext } from "react-icons";
const titleStyle = "fw-bold";
const iconStyle = "ms-auto me-auto";
const cardStyle = `
  w-100
  h-auto
  d-flex
  flex-column
  justify-content-center
  text-center
  p-3
  gap-3
  bg-light
  lightBlueBorder`;

const Card = ({ icon, title, description }: Card_T) => (
  <div className={cardStyle}>

    <span className={titleStyle}>
      {title}
    </span>

    <div className={iconStyle}>
      <IconContext.Provider value={{ size: "2.5rem" }}>
        {icon}
      </IconContext.Provider>
    </div>

    <span>
      {description}
    </span>

  </div>

)
export default Card