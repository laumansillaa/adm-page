import { Box, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import search from '../../assets/svg/search.svg'
import finance from '../../assets/svg/finance.svg'
import house from '../../assets/svg/house.svg'
import office from '../../assets/office.png'
import './styles/index.css'
import './styles/responsive.css'

const Body = () => {

    return (
        <Box 
            className='body-container'
        >
            <Box sx={{
                pt: '2.5rem',
            }}
            className='body-cont-one'>
                <Typography sx={{
                    fontFamily:'Poppins',
                    fontSize: '3rem'
                }}
                >Ayudando a las personas</Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '2rem'
                }}
                >Asi es como trabajamos</Typography>
            </Box>
            <Box 
                className='body-cont-two'
            >
                <Box className='body-section'
                >
                    <img src={search} alt='search' style={{height: '12rem'}} />
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 20,
                        mb: 3
                    }}
                    >Estudio de viabilidad económica</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        pl: 1,
                        pr: 1
                    }}>
                        Analizamos cada punto del trabajo y realizamos la tasación de la vivienda
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ArrowCircleRightIcon sx={{fontSize: '4rem', color: '#3672b5'}} />
                </Box>
                <Box className='body-section'
                >
                    <img src={finance} alt='finance' style={{height: '12rem'}} />
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 20,
                        mb: 3
                    }}>Etapa de negociación</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        pl: 1,
                        pr: 1
                    }}>Negociamos las mejores condiciones para que ahorres en interes</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ArrowCircleRightIcon sx={{fontSize: '4rem', color: '#3672b5'}} />
                </Box>
                <Box className='body-section'
                >
                    <img src={house} alt='house' style={{height: '12rem'}} />
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 20,
                        mb: 3
                    }}
                    >Asesoramiento continúo</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        pl: 1,
                        pr: 1
                    }}
                    >Te acomapañamos en el proceso hasta la entrega de llaves ante notario</Typography>
                </Box>
            </Box>
            <Box 
                className='body-cont-three'
            >
                <Box className='body-cont-image'>
                    <img src={office} alt='office' style={{width: '100%'}} />
                </Box>
                <Box 
                    className='body-cont-description'
                >
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '2.5rem',
                        mb: '3rem'
                    }}>¿Quienes somos?</Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.4rem'
                    }}>Somos una empresa de Servicios Financieros, nuestra actividad principal es asesorar y 
                        encontrar la mejor solución que exista en el mercado hipotecario, 
                        en base a la necesidad de nuestros clientes.
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default Body;