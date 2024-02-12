// BTS
import Col from 'react-bootstrap/Col';
// Data
import memberList from './memberList';
// Icons
import Card from './Card';
// Style
const colStyle = "d-flex flex-column cardCol";

const CardsMapper = () => (
    <>
        {memberList.map((member) => (
            <Col
                xs={12}
                lg={4}
                key={member.name}
                className={colStyle}
            >
                <Card member={member} />
            </Col>
        ))}
    </>
)
export default CardsMapper