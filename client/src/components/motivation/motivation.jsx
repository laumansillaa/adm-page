import {Box, Typography} from '@mui/material'



const Motivation = () => {


    return (
        <Box sx={{
            background: '#3672b5',
            height: '100%',
            
        }}>
            <Box sx={{
                borderRadius: '0px 0px 0px 210px',
                background: '#fff',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <Box sx={{
                    width: '70%',
                    padding: '4rem'
                }}>
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

