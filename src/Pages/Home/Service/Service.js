import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={3} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0, border: 0, m: 2 }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <Typography variant="h5" sx={{ m: 2 }} component="div">
                        {name}
                    </Typography>

                    <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;