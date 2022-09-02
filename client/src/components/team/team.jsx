import {Box, Typography} from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import thomas from '../../assets/thomas.jpg'
import alejandro from '../../assets/alejandro.jpg'
import cristina from '../../assets/cristina.jpg'
import './styles/index.css'
import './styles/responsive.css'

const Team = () => {


    return (
        <Box>
            <Box className='team-title'>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: 40
                }}>Nuestro equipo de trabajo</Typography>
                <Diversity3Icon sx={{fontSize: 50, pl: 3 }}/>
            </Box>
            <Box className='cont-team-profile'
            >
                <Box className='team-profile'
                >
                    <img src={thomas} alt='thomas' className='imgProfile'/>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 24
                    }}>Thomas Vazquez</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 18,
                        pb: 4
                    }} >Asesor y Analista Financiero</Typography>
                </Box>
                <Box className='team-profile'>
                    <img src={alejandro} alt='alejandro' className='imgProfile' />
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 24
                    }}>Alejandro Deluchi</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 18
                    }} >Asesor Financiero </Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 14
                    }} >AIF 1563 / REG. 2293 / AICAT 3337</Typography>
                </Box>
                <Box className='team-profile'>
                    <img src={cristina} alt='cristina' className='imgProfile' />
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 24
                    }}> Cristina Jiménez</Typography> 
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 18
                    }}>Responsable Administracion</Typography> 
                </Box>
            </Box>
        </Box>

    )
}


export default Team;