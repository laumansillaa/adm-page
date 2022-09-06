import { Box, Typography } from '@mui/material';
import './styles/finance.css'


const Finance = () => {

    return (
        <Box className='cont-finance'>
            <Box>
                <Box className='cont-title-finance'>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.8rem'
                    }}>Disponemos de diferentes porcentajes para su financiacion</Typography>
                </Box>
                <Box className='cont-info-finance'>
                    <Box className='box-info-finance-b'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem'
                        }}>Desde el 50% al 100% de lo que tú necesites</Typography>
                    </Box>
                    <Box className='box-info-finance-b'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem'
                        }}>Financiaciones del 80% y hasta el 100% en su compra de tu 
                            primera vivienda
                        </Typography>
                    </Box>
                    <Box className='box-info-finance-b'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem'
                        }}>Financiacion desde el 60% hasta el 100%
                            para locales comerciales</Typography> 
                    </Box>
                    <Box className='box-info-finance'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem'
                        }}> Financiate con tu vivienda actual al 100%</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='cont-title-two-finance'>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '1.6rem'
                }}>¿Tienes quien te ayude a mejorar tu vida?</Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '1.6rem'
                }}>¿Sabías que te pueden ayudar sin ser avalista y sin responder sobre la deuda?</Typography>
            </Box>
            <Box className='cont-section-three-finance'>
                <Box className='cont-info-section-three-finance'>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem',
                        mb: '1rem'
                    }}>• Hipotecas con aval solidario</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem',
                        mb: '1rem'
                    }}>• Hipotecas con aval sólo al 20%</Typography>
                </Box>
                <Box className='cont-info-section-three-finance'>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem',
                        mb: '1rem'
                    }}>• Hipotecas con aval a 5 y 8 años</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem',
                        mb: '1rem'
                    }}>• Hipotecas con garantias externas</Typography>
                </Box>
            </Box>
        </Box>

    )
}


export default Finance; 