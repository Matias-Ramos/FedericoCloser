// Hooks
import { useMediaQuery } from '@mui/material';
// Components
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// Utils
const ariaLabel = "Navegador entre secciones Campamento de Ventas y Federico Santos"

const BtnGroup = () => {

    const isMobile = useMediaQuery('(max-width:991px)');

    return (
        <ButtonGroup 
            orientation={isMobile ? "vertical" : "horizontal"}
            variant="contained"
            aria-label={ariaLabel}
            sx={{boxShadow:"none"}}
            >
            <Button>
                <h1>Campamento de ventas</h1>
            </Button>
            <Button>
                <h1>Federico Santos</h1>
            </Button>
        </ButtonGroup>
    )
}


export default BtnGroup