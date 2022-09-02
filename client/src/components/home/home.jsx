import {Box, Typography} from '@mui/material';
import { Link } from 'react-router-dom'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import GoogleIcon from '@mui/icons-material/Google';
import GroupsIcon from '@mui/icons-material/Groups';
import Body from '../body/bodyHome'
// import logo from '../assets/logo.png';
import './styles/index.css'
import './styles/responsive.css'

const Home = () => {

    return (
        <Box>
            <Box 
                className='homeImage'
            >   
                <Box className='homeTitle'>
                    <Box>
                        <Typography sx={{
                            color: '#fff',
                            fontFamily: 'Montserrat',
                            fontSize: '3.5rem',
                        }}
                        >
                            ¿Buscas una hipoteca?
                        </Typography>
                    </Box>
                    <Box >
                        <Typography sx={{
                        color: '#fff',
                        fontFamily: 'Montserrat',
                        fontSize: '2.5rem'
                        
                        }}>Nosotros te la conseguimos</Typography>
                    </Box>
                </Box>
                <Box 
                    className='cont-info-home'>
                    <Box 
                        className='cont-info'>
                        <AddHomeWorkIcon sx={{mr: '1rem', fontSize:'3rem'}} />
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontSize: '1.8rem'
                        }}>+ 2000 familias ya cumplieron el sueño de la casa propia</Typography>
                    </Box>
                    <Box className='cont-info'>
                        <GoogleIcon sx={{mr: '1rem', fontSize:'3rem'}} />
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontSize: '1.8rem'
                        }}>Nuestras valoraciones demuestran nuestro compromiso</Typography>
                    </Box>
                    <Box className='cont-info'>
                        <GroupsIcon sx={{mr: '1rem', fontSize: '3rem'}} />
                        <Typography sx={{fontFamily: 'Montserrat', fontSize: '1.8rem'}} >Contamos con un grupo de expertos en asesoria financiera</Typography>
                    </Box>
                    
                </Box>
            </Box>
            <Body/>
        </Box>

    )
}

export default Home;