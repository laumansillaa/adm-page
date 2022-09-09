import {Box, Typography} from '@mui/material'
import './styles/index.css'


const Motivation = () => {


    return (
        <Box className='cont-motivation'>
            <Box className='cont-motivation-border'>
                <Box className='motivation-contain-text'>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '2rem',
                        color: '#333333',
                    }}>Sabemos que este es un momento muy importante para ti y tu familia,
                        por ello estaremos a tu lado desde el principio hasta el final.
                    </Typography>

                </Box>

            </Box>
        </Box>

    )
}

export default Motivation;

