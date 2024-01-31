import Col from 'react-bootstrap/Col';
import CardMapper from './CardMapper';
// Styles
const firstColStyle = "d-flex flex-column justify-content-center"

const Text = () => (
    <>
        <Col xs={12} lg={7} className={firstColStyle}>
            <h2>[Detalle]</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem non magnam, voluptatibus cum quaerat adipisci ratione ab impedit facere tempore deserunt ducimus pariatur, provident.</p>
        </Col>
        <Col xs={12} lg={4}>
            <CardMapper />
        </Col>
    </>
)
export default Text