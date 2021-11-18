import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jx5DqJ8BbjJfr4C3I3MZcKJ6w8ahM4uSsZBCJgOivywGZqcDrayV4LsfZoGvy9womiNLKFhj0vN9lYyfqYecNu300vgw93X9a')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Pay for: {appointment.serviceName} </h2>
            <h2>Pay: ${appointment.price} </h2>
            {appointment.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment = {appointment}
                ></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;