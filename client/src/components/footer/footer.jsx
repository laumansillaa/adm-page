import { Box, Typography, TextField, TextareaAutosize } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../assets/logo.png';
import './styles/index.css';
import './styles/responsive.css';


const Footer = () => {


    return (
        <Box sx={{
            background: '#fff'
        }} >
            <Box className='cont-footer'>
                <Box 
                className='cont-footer-one'
                >
                    <Box>
                        <Box sx={{mb: '1rem'}} >
                            <Typography sx={{
                                fontFamily: 'Poppins'
                            }} >¿Tenés alguna duda?</Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins'
                            }} >Nuestro equipo esta para ayudarte</Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins'
                            }}>Contactanos!</Typography>
                        </Box>
                        <Box sx={{pt: '1rem' }}>
                            <img src={logo} alt='imglogo' style={{width: '15rem'}} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.5rem',
                            mb: '1rem'
                        }}
                        >Informacion de contacto</Typography>
                        <Box className='cont-footer-info'>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: '1rem',
                            }} >
                                <PlaceIcon sx={{fontSize: 40}} />
                                <Typography sx={{
                                    fontFamily: 'Poppins'
                                }}
                                >Sant Agustí n° 1, 1° 2a - Mataró 08301 (Barcelona)</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: '1rem'
                            }}>
                                <PlaceIcon sx={{fontSize: 40}} />
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                }}
                                >Passeig Comerç, 147 - Sabadell 08203 (Barcelona)</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }} >
                                <LocalPhoneIcon sx={{fontSize: 40}} />
                                <Typography sx={{
                                    fontFamily: 'Poppins'
                                }}>Tel. 93 516 48 88 - 600 398 791</Typography>
                            </Box>

                        </Box>
                        <Box sx={{
                                mt: '1rem',
                            }} >
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '1.5rem',

                            }}>Medios de contacto</Typography>
                            <Box>
                                <WhatsAppIcon sx={{fontSize: 35, mr: '1rem'}} />
                                <MailIcon sx={{fontSize: 35, mr: '1rem'}}/>
                                <InstagramIcon sx={{fontSize: 35, mr: '1rem'}}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    height: '50%'
                }} >
                    <Box>
                        <Typography>&copy; Todos los derechos reservados | ADM SERVICIOS FINANCIEROS</Typography>
                    </Box>
                    <Box>
                        <Typography>Design by Lauchi :p</Typography>
                    </Box>
                </Box>

            </Box>
        </Box>

    )
}

export default Footer;