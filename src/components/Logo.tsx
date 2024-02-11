import blueLogo from '/cdv/blueLogo_whiteBckg.png';
import whiteLogo from '/cdv/logo_white.png';

const Logo = ({ color } : { color: string }) => (
    <img 
        src={ 
            color=="white" ? whiteLogo : blueLogo
        }
        className='mw-100   logo'
        alt="logo del Campamento de ventas" 
    />
    
)

export default Logo