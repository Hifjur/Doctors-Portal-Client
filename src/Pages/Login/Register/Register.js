import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, error, registerUser, isLoading } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match!');
            return
        }

        registerUser(loginData.name, loginData.email, loginData.password, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="username"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="re-enter password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already registered? Please login</Button>
                            </NavLink>
                        </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Account Creation Successful</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid  item xs={12} md={6}>
                <NavLink to='/home'>
                        <img style={{ width: '100%' }} src={login} alt=""></img>
                    </NavLink>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;