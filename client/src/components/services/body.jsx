import {Box, Typography} from '@mui/material';
import Mortgage from './mortgage'
import Finance from './finance'
import contract from '../../assets/svg/contract.svg';
import prestamo from '../../assets/svg/prestamo.svg';
import house3 from '../../assets/svg/house3.svg';
import subrogaciones from '../../assets/svg/subrogaciones.svg'
import deudas from '../../assets/svg/deudas.svg'
import './styles/index.css';

//#212b60

const Body = () => {


    return (
        <Box sx={{
            background: '#fff',
            color: '#333333',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: '3rem',
                paddingLeft: '14rem',
                paddingRight: '14rem'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '1.6rem'
                }}>Nuestra total dedicación en la gestión de cualquiera de 
                    los siguientes servicios hace posible que consigamos el 100% del resultado para nuestros clientes.</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                pt: '3rem'
            }}>
                <Box>
                    <img src={contract} alt='herencia' className='services-image'/>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Herencia</Typography>
                </Box>
                <Box>
                    <img src={prestamo} alt='prestamos' className='services-image'/>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Prestamos personales</Typography>
                </Box>
                <Box>
                    <img src={deudas} alt='deudas' className='services-image' />
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Reunificacion de deudas</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                mt: '1.5rem',
                pb: '2rem'
            }}>
                <Box>
                    <img src={house3} alt='hipotecas' className='services-image'/>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Hipotecas</Typography>
                </Box>
                <Box>
                    <img src={subrogaciones} alt='subrogaciones' className='services-image'/>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Subrogaciones</Typography>
                </Box>
            </Box>
            <Mortgage/>
            <Finance/>
        </Box>
    )
}


export default Body;