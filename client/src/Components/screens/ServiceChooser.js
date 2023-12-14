import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

const ServiceChooser = () => {
    const [selectedService, setSelectedService] = useState('');

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    }

    return (
        <div>
            <h2>Choose a Service</h2>
            <RadioGroup row aria-label="service" name="service" value={selectedService} onChange={handleServiceChange}>
                <FormControlLabel value="Makeup" control={<Radio />} label="Makeup" />
                <FormControlLabel value="Hairdressing" control={<Radio />} label="Hairdressing" />
                <FormControlLabel value="Nails" control={<Radio />} label="Nails" />
            </RadioGroup>
            <p>You have selected: {selectedService}</p>
        </div>
    );
}

export default ServiceChooser;