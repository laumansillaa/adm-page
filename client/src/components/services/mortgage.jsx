import { Box, Typography } from '@mui/material';
import mortgage from '../../assets/mortgage.jpg'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HouseIcon from '@mui/icons-material/House';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ConstructionIcon from '@mui/icons-material/Construction';
import './styles/mortgage.css'


const Mortgage = () => {

    return (
        <Box className='cont-mortgage'>
            <Box className='cont-section-one'>
                <Box className='section'>
                    <Box className='cont-title-section-one'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2.5rem',
                            color: '#fff',
                            padding: '1rem'
                        }}>¿Necesitas una hipoteca?</Typography>
                    </Box>
                    <Box className='cont-info-section-one'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>• Hipotecas a tipo fijo</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>• Hipotecas a interes variable</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>• Hipotecas a interes mixto</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>• Hipotecas cambio de casa</Typography>
                    </Box>
                </Box>
                <Box className='cont-image-section-one'>
                    <img src={mortgage} alt='mortgage' className='mortgage-image'/>
                </Box>
            </Box>

            <Box className='cont-section-two'>
                <Box className='cont-sections'>
                    <Box className='cont-title-info'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>Sin aportacion economica</Typography>
                    </Box>
                    <Box>
                        <Box className='cont-box-info'>
                            <AccountBalanceIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.3rem',
                            }}>Financiación al 100% de compra más los gastos</Typography>
                        </Box>
                        <Box className='cont-box-info'>
                            <HouseIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.2rem',
                            }}>Financiación al 100% más los gastos con garantía hipotecaria</Typography>
                        </Box>
                        <Box className='cont-box-info'>
                            <QueryStatsIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.3rem',
                            }}>Financiación al 100% más los gastos bancarios con aval</Typography>
                        </Box>
                        <Box className='cont-box-info'>
                            <ConstructionIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.3rem',
                            }}>Financiación al 100% más los gastos sin aval hipotecario</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className='cont-sections'>
                    <Box className='cont-title-info'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem',
                            mb: '1rem'
                        }}>Con aportacion economica</Typography>
                    </Box>
                    <Box>
                        <Box className='cont-box-info'>
                            <AccountBalanceIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '1.3.rem'
                            }}>Las mejores condiciones del mercado</Typography>
                        </Box>
                        <Box className='cont-box-info'>
                            <HouseIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '1.3.rem'
                            }}>Hipotecas para viviendas</Typography>
                        </Box>
                        <Box className='cont-box-info'>
                            <QueryStatsIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '1.3.rem'
                            }}>Hipotecas para terrenos urbanos</Typography>
                        </Box>
                        <Box className='cont-box-info'>
                            <ConstructionIcon sx={{mr: '.5rem'}}/>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '1.3.rem'
                            }}>Hipotecas para locales comerciales</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Mortgage;