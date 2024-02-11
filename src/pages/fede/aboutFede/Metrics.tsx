// Components
import CountUp from "./CountUp"
// Style
const containerStyle = "d-flex gap-3 flex-nowrap my-4";

const Metrics = () => (
    <div className={containerStyle} id="metrics">
        <div>
            <CountUp upTo={10} />+
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div>
            <CountUp upTo={120} />+
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div>
            <CountUp upTo={60} />+
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
    </div>
)
export default Metrics