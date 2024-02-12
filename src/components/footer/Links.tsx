// Navigation
import { Link } from "react-router-dom"
// Style
const linkStyle = "text-light text-decoration-none"

const Links = () => (
    <>
        <Link to={`/cdv`} reloadDocument className={linkStyle}>
            <span>Campamento de Ventas</span>
        </Link>

        <Link to={`/FedericoSantos`} reloadDocument className={linkStyle}>
            <span>Federico Santos</span>
        </Link>
    </>
)
export default Links