import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Box,
    Grid,
} from '@material-ui/core';
import StepperIcons from "./StepIcons";
import StepConnector from './StepConnector'
import ContactForm from './Forms/ContactForm';
import PaymentForm from './Forms/PaymentForm'
import Review from './Forms/ReviewForm'



const Steppers = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = style();

    const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    return <div className={classes.main}>
        <Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} activeStep={activeStep}>
            {/* Change the number of loops here based on StepContent */}
            {[1, 2, 3].map(e =>
                <Step key={e}>
                    <StepLabel StepIconComponent={StepperIcons} />
                </Step>
            )}
        </Stepper>
        <Box className={classes.mainBox}>
            <Grid
                container
                spacing={3}
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{ height: "400px" }}
               
            >
                {activeStep === 3
                    ?
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                    :
                    <form className={classes.form} onSubmit={e => { e.preventDefault(); handleNext()}}>
                    <Grid container spacing={3}>
                        <StepContent step={activeStep} />
                        <Grid container item justify="flex-end">
                            <Button disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} type="submit">
                                {activeStep === 2 ? 'Pay' : 'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                       
                    </form>
                }
            </Grid>
             
        </Box>
    </div>
}

const StepContent = ({ step }) => {
    switch (step) {
         case 0:
         return <ContactForm />;
         case 1:
         return <PaymentForm/>;
         case 2:
         return <Review />;
         default:
         return <></>;
    }
}


const style = makeStyles(theme => ({
    main : {
        marginTop:"150px",
    },
    button: {
        marginRight: theme.spacing(1),
    },
    mainBox: {
        position: "relative",
        marginTop: "20px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width:"100%"
    },
    buttonWrapper: {
        justifyContent: "flex-end"
    },
    
}));

export default Steppers;