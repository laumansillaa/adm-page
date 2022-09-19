import {Box, Typography} from '@mui/material';
import Mortgage from './mortgage'
import Finance from './finance'
import Loans from './loans';
import contract from '../../assets/svg/contract.svg';
import prestamo from '../../assets/svg/prestamo.svg';
import house3 from '../../assets/svg/house3.svg';
import subrogaciones from '../../assets/svg/subrogaciones.svg'
import deudas from '../../assets/svg/deudas.svg'
import './styles/index.css';
import './styles/body.css';
import './styles/body-responsive.css'

//#212b60

const Body = () => {


    return (
        <Box sx={{
            background: '#fff',
            color: '#333333',
        }}>
            <Box className='cont-title-body'>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '1.6rem'
                }}>Nuestra total dedicación en la gestión de cualquiera de 
                    los siguientes servicios hace posible que consigamos el 100% del resultado para nuestros clientes.</Typography>
            </Box>
            <Box className='cont-body-section-one'>
                <Box>
                    <img src={contract} alt='herencia' className='services-image'/>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Herencia</Typography>
                </Box>
                <Box className='res-m'>
                    <img src={prestamo} alt='prestamos' className='services-image'/>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Prestamos personales</Typography>
                </Box>
                <Box className='res-m'>
                    <img src={deudas} alt='deudas' className='services-image' />
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem'
                    }}>Reunificacion de deudas</Typography>
                </Box>
            </Box>
            <Box className='cont-body-section-two'>
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
            <Loans/>
        </Box>
    )
}


export default Body;