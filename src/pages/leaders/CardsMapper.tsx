// BTS
import Col from 'react-bootstrap/Col';
// Data
import members from './members';
// Icons
import { FaXTwitter , FaFacebook , FaInstagram , FaTiktok  } from "react-icons/fa6";

const CardsMapper = () => {
  return (
    <>
    {members.map(member => {
        return(
            <>
            <Col xs={12} lg={4} className="d-flex flex-column " style={{border:"1px solid red", padding:"5px"}}>
                <img src={member.picture} alt={`imagen de ${member.name}`} />
                <div className='d-flex flex-column h-100 justify-content-between'>
                    <span className='text-center'>{member.name}</span>
                    <span>{member.exp}</span>
                    <div className='d-flex flex-column'>
                        {
                            member.fb &&
                            <a href={member.fb}>
                                <FaFacebook />
                            </a>
                        }
                        {
                            member.tiktok &&
                            <a href={member.tiktok}>
                                <FaTiktok />
                            </a>
                        }
                        {
                            member.instagram &&
                            <a href={member.instagram}>
                                <FaInstagram />
                            </a>
                        }
                        {
                            member.twitter &&
                            <a href={member.twitter}>
                                <FaXTwitter />
                            </a>
                        }
                    </div>
                </div>
            </Col>
            </>
        )
    })}
    </>
  )
}
export default CardsMapper