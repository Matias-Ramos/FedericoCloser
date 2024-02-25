// Types
import { Profile } from "./tinoProfile";
// Style
const containerStyle = "d-flex flex-column justify-content-between h-100 cardBorder";
const legendStyle = 'd-flex flex-column h-100 justify-content-between legend';
const roleStyle = "text-center fw-bold leadName"

const Card = ({ teo }: { teo: Profile }) => (
    <div className={containerStyle}>

        <div className="position-relative">
            <div className="imgContainer">
                <img
                    className="w-100"
                    src={teo.picture}
                    alt={`Foto de ${teo.name}`} 
                />
            </div>
        </div>

        <div className={legendStyle}>
            <span className={roleStyle}>
                Nuestro director
            </span>
            <span className='my-3'>
                {teo.exp}
            </span>
        </div>

    </div>
)
export default Card