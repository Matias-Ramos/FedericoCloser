import Card from "./Card"
import { cardList } from "./cardList"
// Styles
const containerStyle = "d-flex align-items-center gap-4 my-3 flex-column flex-lg-row";

const CardMapper = () => (
  <div className={containerStyle}>
    { cardList.map((card, index) =>  (
        <Card
          key={index}
          icon={card.icon}
          description={card.description}
          hightlight={card.hightlight}
        />
      )
    )}
  </div>
)

export default CardMapper