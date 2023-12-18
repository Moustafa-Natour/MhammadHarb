import React, { useEffect } from 'react'
import { Box, Typography, MobileStepper, Paper, useTheme, Container } from '@mui/material';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import '../css/Carousal.css';

const Carousal = ({ data }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.length;
    const theme = useTheme();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep) =>
                prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
            );
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [maxSteps]);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Container fixed>
            <Box align='center' sx={{ maxHeight: 35, maxWidth: 450, marginLeft: "auto", marginRight: "auto" }} >
                <Paper
                    squares
                    elevation={22}
                    sx={{
                        alignItems: 'center',
                        p: 2,
                        m: 2,
                        bgcolor: 'black',
                    }}
                >
                    <Typography sx={{ color: 'white' }}>{data[activeStep]?.caption}</Typography>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                        autoPlay={true}
                    >
                        {data.map((step, index) => (
                            <div key={index}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: '100%',
                                            display: 'block',
                                            overflow: 'hidden',
                                            width: '100%',
                                            objectFit: 'cover',

                                        }}
                                        src={step.imgUrl}
                                        alt={step.caption}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </SwipeableViews>
                    <MobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{ bgcolor: 'black', color: 'white', flexGrow: 1 }}
                        align='center'
                    />
                </Paper>
            </Box>
        </Container >
    )
}

export default Carousal
