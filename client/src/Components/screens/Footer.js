// Footer.js
import React, { useContext } from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import colors from '../constants/colors';
import { Link } from 'react-router-dom';
import '../constants/font.css';
import UserContext from './UserContext';
import { AppBar, styled, useTheme, Toolbar, ButtonGroup, Stack, IconButton, Typography, Container } from '@mui/material';
const drawerWidth = 240;
const MAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
})
);
function Footer() {
    const { open } = useContext(UserContext);
    const theme = useTheme();


    return (
        <MAppBar open={open} position='fixed' sx={{ top: 'auto', bottom: 0, backgroundColor: colors.custSecondary, alignItems: 'center' }} >
            <Toolbar>
                <Container maxWidth="md" sx={{ mt: 2 }}>
                    <Typography variant='body1' sx={{ fontFamily: 'PlayBold', color: colors.custPrimary, mt: 2 }}>
                        &copy; 2023 <Link style={{ color: 'inherit', fontFamily: 'BlackOpsOne', textDecoration: 'none' }} to="/">MHAMMAD HARB</Link> All rights reserved
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={4}>
                        <InstagramIcon fontSize="large" sx={{ color: "#E1306C" }} />
                        <YouTubeIcon fontSize="large" sx={{ color: "#FF0000" }} />
                        <FacebookIcon color="primary" fontSize="large" />
                        <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
                        <PinterestIcon fontSize="large" sx={{ color: "#E60023" }} />
                        <LinkedInIcon fontSize="large" color="primary" />
                    </Stack>

                </Container>
            </Toolbar>
        </MAppBar>
    );
}

export default Footer;



