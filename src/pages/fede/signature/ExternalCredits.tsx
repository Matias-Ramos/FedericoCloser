const freepikLink = "https://www.flaticon.com/free-icons/cancel";
const svgBckgLink = "https://www.flaticon.com/free-icons/approved";

const ExternalCredits = () => (
    <div className="d-flex justify-content-center" id="externalCredits">
        <i>
            Icon credits:
            <ul>
                <li>
                    <a className="px-1" href={freepikLink} target="_blank" rel="noopener noreferrer">
                        freepik
                    </a>
                </li>
                <li>
                    <a href={svgBckgLink} target="_blank" rel="noopener noreferrer">
                        flaticon
                    </a>
                </li>

            </ul>
        </i>
    </div>
)
export default ExternalCredits