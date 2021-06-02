import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

import { countryNames } from './countries';

const ContactForm = () => {

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Contact information</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="First Name"
                name="firstname"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Last Name"
                name="lastname"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Email Address"
                name="email"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Street Address 1"
                name="address1"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Street Address 2 (optional)"
                name="line2"
                variant="outlined"
                fullWidth
            />
        </Grid>
        
        <Grid item xs={12} sm={4}>
            <TextField
                label="City"
                name="city"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="State"
                name="state"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Autocomplete options={countryNames}
                   getOptionLabel={option => option.name}
                   renderInput={params => <TextField
                                               label="Country"
                                               name="country"
                                               variant="outlined"
                                               required
                                               fullWidth
                                               {...params}
                                           />
                                 }
        />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Postal/ZIP Code"
                name="postal_code"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        
    </>
}

export default ContactForm;