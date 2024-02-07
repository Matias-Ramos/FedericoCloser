// Types
import { Member_T } from "../../../components/socMediaMapper/MembersType";
// Icons
import SocMediaMapper from '../../../components/socMediaMapper/SocMediaMapper';
// Style
const containerStyle = "d-flex flex-column justify-content-between h-100 cardBorder";
const legendStyle = 'd-flex flex-column h-100 justify-content-between p-3 legend';
const nameStyle = "text-center mt-3 fw-bold"

const Card = ({ member }: { member: Member_T }) => (
    <div className={containerStyle}>

        <img
            className="w-100"
            src={member.picture}
            alt={`Foto de ${member.name}`} 
        />

        <div className={legendStyle}>
            <span className={nameStyle}>
                {member.name}
            </span>
            <span className='my-3'>
                {member.exp}
            </span>
            <SocMediaMapper member={member} />
        </div>

    </div>
)
export default Card