import { Button, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess('Doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setSuccess('filed to add doctors')
            });
    }
    return (
        <div>
            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    required
                    onChange={e => setName(e.target.value)}
                    id="standard-basic" label="Name"
                    variant="standard" />

                <br />
                <TextField
                    sx={{ width: '50%' }}
                    required
                    onChange={e => setEmail(e.target.value)}
                    id="standard-basic" label="Email" variant="standard" />
                <br />
                <Input accept="image/*" type="file"
                    onChange={e => setImage(e.target.files[0])} /> <br />
                <Button variant="contained" type='submit'>
                    add doctor
                </Button>
            </form>
            {
                success && <Typography variant='h3'>{success}</Typography>
            }
        </div>
    );
};

export default AddDoctor;