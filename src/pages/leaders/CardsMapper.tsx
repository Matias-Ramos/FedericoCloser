// BTS
import Col from 'react-bootstrap/Col';
// Data
import members from './members';
// Icons
import SmediaMapper from './SmediaMapper';
// Style
const txtOuterCtStyle = 'd-flex flex-column h-100 justify-content-between';
const nameStyle = "text-center mt-3"

const CardsMapper = () => (
    <>
        {members.map((member) => {
            return (
                <Col
                    xs={12}
                    lg={4}
                    key={member.name}
                    className="d-flex flex-column"
                >

                    <img src={member.picture} alt={`Foto de ${member.name}`} />
                    <div className={txtOuterCtStyle}>
                        <span className={nameStyle}>
                            {member.name}
                        </span>
                        <span className='my-3'>
                            {member.exp}
                        </span>
                        <SmediaMapper member={member} />
                    </div>
                </Col>
            )
        })}
    </>
)
export default CardsMapper