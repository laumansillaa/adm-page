import {Box, TextField, Typography, } from '@mui/material';
import contact from '../../assets/contact.jpg'
import MapViewMataro from '../map/map-mataro';
import MapViewSabadell from '../map/map-sabadell';
import './styles/index.css';
import './styles/responsive.css';

const Contact = () => {

    return (
        <Box className='cont-contact'>
            <Box className='cont-contact-section-one'>
                <Box className='cont-contact-image'>
                    <img src={contact} alt='contact' className='contact-image' />
                </Box>
                <Box className='cont-contact-form'>
                    <Box className='cont-form-title'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>¿Tienes una duda?</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem'
                        }}>No dudes en contactarnos</Typography>
                    </Box>
                    <Box className='cont-imputs'>
                        <TextField label='Nombre' variant='outlined' className='inputs'/>
                        <TextField label='Telefono' variant='outlined' className='inputs'/>
                        <TextField label='Email' type='email' variant='outlined' className='inputs'/>
                        <TextField 
                            label='Mensaje' 
                            placeholder='Por favor deje su consulta aqui..'
                            multiline 
                            rows={5}
                        />
                    </Box>
                </Box>
            </Box>
            <Box className='cont-contact-section-two'>
                <Box>
                    <Typography sx={{
                        fontFamily:'Poppins',
                        fontSize: '2rem'
                    }}>Veni a visitarnos</Typography>
                </Box>
                <Box className='cont-contact-direction'>
                    <Box className='cont-direction'>
                        <Typography sx={{
                        fontFamily:'Poppins',
                        fontSize: '1.4rem'
                    }}>Sant Agustí nº1, 1º2ª · Mataró 08301 (Barcelona)</Typography>
                        <MapViewMataro/>
                    </Box>
                    <Box className='cont-direction'>
                        <Typography sx={{
                        fontFamily:'Poppins',
                        fontSize: '1.4rem'
                    }}>Passeig Comerç, 147 · Sabadell 08203 (Barcelona)</Typography>
                        <MapViewSabadell/>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Contact;