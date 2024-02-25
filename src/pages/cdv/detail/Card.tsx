// Interface
import { Card_T } from "./cardList"
// Styles
import { IconContext } from "react-icons";
const iconStyle = "ms-auto me-auto";
const cardStyle = `
  h-100
  w-100
  d-flex
  flex-column
  justify-content-center
  text-center
  p-3
  gap-3
  bg-light
  lightBlueBorder`;

const Card = ({ icon, hightlight, description }: Card_T) => (
  <div>
    <div className={cardStyle}>

      <div className={iconStyle}>
        <IconContext.Provider value={{ size: "2.5rem" }}>
          {icon}
        </IconContext.Provider>
      </div>

      <span>
        <b>{hightlight}</b>{description}
      </span>

    </div>
  </div>

)
export default Card