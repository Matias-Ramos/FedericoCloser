// Hooks
import { useMediaQuery } from '@mui/material';
// Components
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// Utils
const ariaLabel = "Navegador entre secciones Campamento de Ventas y Federico Santos"
// Navigation
import { Link } from 'react-router-dom'

const BtnGroup = () => {

    const isMobile = useMediaQuery('(max-width:991px)');

    return (
        <ButtonGroup 
            orientation={isMobile ? "vertical" : "horizontal"}
            variant="contained"
            aria-label={ariaLabel}
            sx={{boxShadow:"none"}}
        >

            <Link to={ `/cdv` }>
                <Button>
                    <h1 style={{fontSize:"1.1rem"}}>Campamento de ventas</h1>
                </Button>
            </Link>

            <Link to={ `/FedericoSantos` }>
                <Button>
                    <h1 style={{fontSize:"1.1rem"}}>Federico Santos</h1>
                </Button>
            </Link>
            
        </ButtonGroup>
    )
}


export default BtnGroup