import { Box, Typography } from '@mui/material';
import building from '../../assets/svg/building.svg';
import Body from './body';
import './styles/index.css';


const Services = () => {


    return (
        <Box>
            <Box sx={{
                background: '#fff'
            }}>
                <Box sx={{
                    background: '#3672b5',
                    borderRadius: '0 0 550px 0',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'

                }}>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '3rem'
                        }}>El servicio que necesite</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '3rem'
                        }}>ADM lo hace por ti</Typography>
                    </Box>
                    <Box>
                        <img src={building} alt='building'/>
                    </Box>
                </Box>
            </Box>
            <Body/>
        </Box>
    )
}

export default Services;