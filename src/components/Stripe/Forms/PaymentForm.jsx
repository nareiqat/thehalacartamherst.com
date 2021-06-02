import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
// import Autocomplete from '@material-ui/lab/Autocomplete';

const PaymentForm = () => {

    const cardsLogo = [
      
        "discover",
        "mastercard",
        "visa",
        "AmericanExpress",
        "paypal"
        
    ];

    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={3}>
                <Typography variant="h6">Payment Data</Typography>
            </Grid>
            <Grid container item xs={12} sm={9} justify="space-between">
                {cardsLogo.map(e => <img key={e} src={`../../images/${e}.png`} alt={e} width="50px" align="bottom" style={{ padding: "0 5px" }} />)}
            </Grid>
        </Grid>
        
        <Grid item xs={6} sm={6}>
            <TextField
                label="Name"
                name="Name"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        {/* <Grid item xs={6} sm={3}>
            <TextField
                label="Amount"
                name="amount"
                variant="outlined"
                required
                fullWidth
            />
        </Grid> */}
        <Grid item xs={12} sm={6}>
            <TextField
                label="Credit Card Number"
                name="ccnumber"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
            />
        </Grid>
        <Grid item xs={6} sm={6}>
            <TextField
                label="Expiration Date"
                name="ccexp"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
            />
        </Grid>
        <Grid item xs={6} sm={6}>
            <TextField
                label="CVC"
                name="cvc"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
            />
        </Grid>
    </>
}

export default PaymentForm;

