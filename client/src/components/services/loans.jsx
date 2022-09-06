import {Box, Typography} from '@mui/material';
import house from '../../assets/house.jpg';
import collage from '../../assets/collage.png'
import './styles/loans.css'


const Loans = () => {


    return (
        <Box>
            <Box className='cont-loans'>
                <Box className='loans-section-one'>

                    <Typography sx={{
                        color: '#3672b5',
                        fontFamily: 'Poppins',
                        fontSize: '2.5rem'
                        
                    }}>¿No puedes comprar una vivienda nueva y quieres renovar la tuya?</Typography>
                    <Box className='loans-text'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.8rem'
                        }}>Reforma tu vivienda al 100% y sorprendete a ti mismo</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.8rem'
                        }}>Los mejores prestamos para reformas con unos tipos de interes increibles</Typography>
                    </Box>
                </Box>
                <Box className='loans-section-two'>
                    <img src={house} alt='house' className='loans-image'/>
                </Box>
            </Box>
            <Box className='cont-loans-two'>
                <Box>
                    <img src={collage} alt='collage' className='loans-collage'/>
                </Box>
                <Box className='loans-text-section-two'>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '2.5rem',
                        color: '#3672b5'
                    }}>¿Necesitas dinero?</Typography>
                    <Box className='loans-text'>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.8rem'
                        }}>Prestamos de consumo especifico para lo que necesites en estos momentos</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '2rem',
                            color: '#3672b5',
                            mt: '2rem'
                        }}>Desde 5.000€ hasta 60.000€</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Loans;