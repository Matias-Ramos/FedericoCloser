// Interface
import { Card_T } from "./cardList"
// Styles
import { IconContext } from "react-icons";
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
  blueBorder`;

const Card = ({ icon, title, description }: Card_T) => {
  return (
    <div className="lightBlueBorder">
      <div className="whiteBorder">
        <div className={cardStyle}>

          <span> {title} </span>

          <div className="ms-auto me-auto">
            <IconContext.Provider value={{ size: "2.5rem" }}>
              {icon}
            </IconContext.Provider>
          </div>

          <span> {description} </span>

        </div>
      </div>
    </div>
  )
}
export default Card