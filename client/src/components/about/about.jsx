import {Box, Typography} from '@mui/material'
import office3 from '../../assets/office3.jpg'
import team from '../../assets/svg/team.svg'
import Team from '../../components/team/team'
import Motivation from '../../components/motivation/motivation'
import './styles/index.css'
import './styles/responsive.css';


const About = () => {


    return (
        <Box className='about'>
            <Box className='aboutHeader'>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: 60,
                    pt: '4rem',
                    pb: '2rem',
                    color: '#fff'
                }}>¿Por qué nosotros?</Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: 30,
                    mb: 8,
                    mt: 2
                }}>
                    En ADM somos lideres en el mercado
                </Typography>
            </Box>
            <Box className='about-cont-text'
            >
                <Box className='about-text'>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        
                    }}
                    
                    className='about-text-responsive'>
                        ○ Somos un equipo de personas con la experiencia, el buen trato y las ganas de ofrecer el mejor servicio, 
                        manteniendo al día, la capacitación y formación.
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        
                    }}
                    className='about-text-responsive'
                    >
                        ○  En esta empresa solo se aceptan personas que quieran ser parte de la familia ADM, 
                        entendiendo que todos y cada uno de ellos aportan lo mejor de sí, 
                        siempre enfocando nuestra realidad al interés de nuestros clientes.
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                    }}
                    className='about-text-responsive'
                    >
                        ○ Trabajamos en el sector desde el año 2003 y nos satisface saber que, en todo este tiempo, 
                        hemos cumplido el sueño de muchas personas que creían no poder alcanzarlo. 
                        Todo ello lo hacemos cada día con responsabilidad en nuestro trabajo, 
                        la perseverancia a la hora de encontrar las soluciones y el compromiso total del buen hacer en 
                        toda y cada una de las operaciones.
                    </Typography>
                </Box>
                <Box sx={{
                    width: '50%',
                    padding: 3
                }}> 
                    <img src={team} alt='pic-jpg' style={{height: '100%', width: '90%'}}/>
                </Box>
            </Box>
            <Team/>
            <Motivation/>
        </Box>

    )
}

export default About;