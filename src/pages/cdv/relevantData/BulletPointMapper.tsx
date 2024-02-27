// BTS
import Col from 'react-bootstrap/Col';
import { PossitiveBulletPoints, NegativeBulletPoints } from './BulletPointList';

// Style
const colStyle = "d-flex flex-column gap-4";

const Layout = () => (
    <>
        <Col xs={12} lg={6} className={colStyle}>
            {PossitiveBulletPoints.map( bp => (
                <div>
                    {bp.icon}
                    <span className='ms-1'>
                        <b>{bp.title}</b>
                    </span>
                    {bp.description}
                </div>
            ))}
        </Col>

        <Col xs={12} lg={6} className={colStyle}>
            {NegativeBulletPoints.map( bp => (
                <div>
                    {bp.icon}
                    <span className='ms-1'>{bp.description}</span>
                </div>
            ))}
        </Col>
        
    </>
)
export default Layout