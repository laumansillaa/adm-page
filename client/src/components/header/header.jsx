import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles/index.css';


const Header = () => {

    return (
        <Box sx={{
            background: '#3672b5',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            pt: 2,
            pb: 2
        }}>
            <Box 
                sx={{
                    width: '30%'
                }}
            >   
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
            <Box sx={{
                width: '70%',
                display: 'flex',
                flexDirection: 'row',
                
            }}>
                <Box sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Link to='/about' className='link'>Quienes somos</Link>
                </Box>
                <Box sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to='/b' className='link'>Equipo</Link>
                </Box>
                <Box sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to='/services' className='link'>Servicios</Link>
                </Box>
                <Box sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to='/d' className='link'>Tú y tu familia</Link>
                </Box>
                <Box sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to='/e' className='link'>Contacto</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;