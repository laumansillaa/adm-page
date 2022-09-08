import {Box, Typography} from '@mui/material';
import './styles/index.css'
import './styles/responsive.css'
import people from '../../assets/people.jpg'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import HailIcon from '@mui/icons-material/Hail';
import AccessibleIcon from '@mui/icons-material/Accessible';

const People = () => {


    return (
        <Box className='cont-people'>
            <Box className='cont-people-image'>
                <Box>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '2.5rem'
                    }}>¿Estas en alguna de estas situaciones familiares?</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.8peoplerem'
                    }}>
                    ¿sabes que cuentas con bonificaciones para la adquisición de tu vivienda?
                    </Typography>
                </Box>
            </Box>
            <Box className='cont-people-info'>
                <Box className='people-section'>
                    <Box className='people-info'>
                        <WatchLaterIcon sx={{fontSize: '3rem', mr: 2}}/>
                        <Typography sx={{
                            fontFamily:'Poppins',
                            fontSize: '2rem'
                        }}>Menores de 33 años</Typography>
                    </Box>
                    <Box className='people-info'>
                        <GroupsIcon sx={{fontSize: '3rem', mr: 2}}/>
                        <Typography sx={{
                            fontFamily:'Poppins',
                            fontSize: '2rem'
                        }}>Familia numerosa</Typography>
                    </Box>
                    <Box className='people-info'>
                        <PersonIcon sx={{fontSize: '3rem', mr: 2}}/>
                        <Typography sx={{
                            fontFamily:'Poppins',
                            fontSize: '2rem'
                        }}>Familia monoparental</Typography>
                    </Box>
                </Box>
                <Box className='people-section'>
                    <Box className='people-info'>
                        <HailIcon sx={{fontSize: '3rem', mr: 2}}/>
                        <Typography sx={{
                            fontFamily:'Poppins',
                            fontSize: '2rem'
                        }}>Divorciadx</Typography>
                    </Box>
                    <Box className='people-info'>
                        <AccessibleIcon sx={{fontSize: '3rem', mr: 2}}/>
                        <Typography sx={{
                            fontFamily:'Poppins',
                            fontSize: '2rem'
                        }}>Situacion de discapacidad</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='cont-people-info-two'>
                <Box className='cont-people-image-one'>
                    <img src={people} alt='asd' className='people-image-one'/>
                </Box>
                <Box className='people-text-info-two'>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '2.6rem',
                        color: '#333333'
                    }}>Contacta con nosotros  y te informaremos de las 
                        ventajas que tienes según tu situación.</Typography>
                </Box>
            </Box>
            
        </Box>
    )
}


export default People;