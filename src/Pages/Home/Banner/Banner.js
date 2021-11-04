import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    // border: '1px solid blue'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography sx={{ mt: 2, fontSize: 14, color: 'gray', fontWeight: 300 }} variant="h6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas laudantium voluptates aut minima ab placeat deleniti soluta aliquam rem culpa.
                        </Typography>

                        <Button sx={{ my: 2 }} variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                            GET APPOINTMENT
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;