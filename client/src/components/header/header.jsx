import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import menu from '../../assets/svg/menu.svg'

import './styles/index.css';


const Header = () => {

    const clickChecked = () => {
        var msg = document.getElementById('menu').click()
    }


    return (
        <Box className='header'>
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
                <label for='menu' className='navLabel'>
                    <img src={menu} alt='menu-svg' className='navSvg' />
                </label>
                <input type='checkbox' id='menu' className='navInput'></input>
                <Box className='header-items'>
                    <Box sx={{
                        width: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Link to='/about' className='link' onClick={clickChecked}>Quienes somos</Link>
                    </Box>
                    <Box sx={{
                        width: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Link to='/services' className='link' onClick={clickChecked}>Servicios</Link>
                    </Box>
                    <Box sx={{
                        width: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Link to='/people' className='link' onClick={clickChecked}>Tú y tu familia</Link>
                    </Box>
                    <Box sx={{
                        width: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Link to='/contact' className='link' onClick={clickChecked}>Contacto</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;