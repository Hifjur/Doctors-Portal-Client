import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const BannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems:'center',
    height: 400
}
const Banner = () => {
    return (
        <Box style={BannerBg} sx={{ flexGrow: 1 }}>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: "left", }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique voluptate ex! Fuga, dicta ipsam modi blanditiis assumenda dolores vero!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
            </Container>
        </Box>
    );
};

export default Banner;