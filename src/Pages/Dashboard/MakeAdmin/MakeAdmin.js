import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSucsess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSucsess(true);
                console.log(data);
                
            }
            
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                sx={{width:'75%'}}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin Assigning Successful</Alert>}
        </div>
    );
};

export default MakeAdmin;