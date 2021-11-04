import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img
                            style={{ width: 400, marginTop: -120 }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant='h6' sx={{ m: 2 }} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' sx={{ m: 2 }} style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant='h6' sx={{ m: 2 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui vero a quam quas labore,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Button sx={{ m: 2 }} variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                                Learn More
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;