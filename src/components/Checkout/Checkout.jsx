import React from "react";
import { Container, Paper, Box, } from "@material-ui/core";
import { makeStyles, } from '@material-ui/core/styles';

import  Steppers  from './../Stripe/Stepper';

const useStyles = makeStyles(() => ({
    boxWrapper: {
        marginBottom: "55px",
        minHeight: "calc(26vh + 260px)"
    },
    container: {
        position: "relative",
        zIndex: "1100",
        marginTop: "-95px",
        marginBottom: "45px",
    }
}));

const Checkout = () => {

    const classes = useStyles();
        
    return <Box component="main" className={classes.boxWrapper}>
        <Container maxWidth="md" className={classes.container}>
            <Paper elevation={5}>
                <Steppers />
            </Paper>
        </Container>
    </Box>
}

export default Checkout;