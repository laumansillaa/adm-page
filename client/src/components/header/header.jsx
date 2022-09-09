import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles/index.css';


const Header = () => {

    return (
        <Box className='cont-header'>
            <Box className='header-icon'>   
                <Link to='/'>
                    <img 
                        src={logo} 
                        alt='logo-png'
                        style={{
                            width: '6rem',
                            
                        }}
                    />
                </Link>
            </Box>
            <Box className='header-items'>
                <Box sx={{
                    width: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Link to='/about' className='link'>Quienes somos</Link>
                </Box>
                <Box sx={{
                    width: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to='/services' className='link'>Servicios</Link>
                </Box>
                <Box sx={{
                    width: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to='/people' className='link'>Tú y tu familia</Link>
                </Box>
                <Box sx={{
                    width: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to='/contact' className='link'>Contacto</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;