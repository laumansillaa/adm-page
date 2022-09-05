import { Box, Typography } from '@mui/material';
import mortgage from '../../assets/mortgage.jpg'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HouseIcon from '@mui/icons-material/House';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ConstructionIcon from '@mui/icons-material/Construction';


const Mortgage = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                display:'flex'
            }}>
                <Box sx={{
                    width: '50%'
                }}>
                    <Box sx={{
                        background: '#3672b5',
                        width: '100%'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2.5rem',
                            color: '#fff',
                            padding: '1rem'
                        }}>¿Necesitas una hipoteca?</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        height: '75%'

                    }}>
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
                <Box sx={{
                    width: '50%',
                    height: '50%'
                }} >
                    <img src={mortgage} alt='mortgage' style={{width: 'auto', height: '27rem'}}/>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: '50%'
                }}>
                    <Box sx={{
                        background: '#3672b5',
                        color: '#fff'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>Con aportacion economica</Typography>
                    </Box>
                    <Box>
                        
                    </Box>
                </Box>
                <Box sx={{
                    width: '50%',
                    borderLeft: '1px solid #333333'
                }}>
                    <Box sx={{
                        background: '#3672b5',
                        color: '#fff'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem',
                        }}>Sin aportacion economica</Typography>
                    </Box>
                    <Box>
                        <Box>
                            <AccountBalanceIcon/>
                            <Typography>Las mejores condiciones del mercado</Typography>
                        </Box>
                        <Box>
                            <HouseIcon/>
                            <Typography>Hipotecas para viviendas</Typography>
                        </Box>
                        <Box>
                            <QueryStatsIcon/>
                            <Typography>Hipotecas para terrenos urbanos</Typography>
                        </Box>
                        <Box>
                            <ConstructionIcon/>
                            <Typography>Hipotecas para locales comerciales</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Mortgage;