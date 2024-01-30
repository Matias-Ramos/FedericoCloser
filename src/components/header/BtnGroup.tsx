// Hooks
import { useMediaQuery } from '@mui/material';
// Components
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InnerTag from './InnerTag';
// Utils
import { getButtonStyle, ariaLabel } from './utils';
// Navigation
import { Link, useLocation } from 'react-router-dom'

const BtnGroup = () => {

    const isMobile = useMediaQuery('(max-width:991px)');
    const url = useLocation();

    return (
        <ButtonGroup
            orientation={isMobile ? "vertical" : "horizontal"}
            variant="contained"
            aria-label={ariaLabel}
            sx={{ boxShadow: "none" }}
        >
            <Link to={`/cdv`}>
                <Button sx={getButtonStyle(url.pathname, ["/cdv", "/"])}>
                    <InnerTag
                        url={url.pathname}
                        targetPaths={["/cdv", "/"]}
                        text="Campamento de ventas"
                    />
                </Button>
            </Link>

            <Link to={`/FedericoSantos`}>
                <Button sx={getButtonStyle(url.pathname, ["/FedericoSantos"])}>
                    <InnerTag
                        url={url.pathname}
                        targetPaths={["/FedericoSantos"]}
                        text="Federico Santos"
                    />
                </Button>
            </Link>

        </ButtonGroup>
    )
}


export default BtnGroup