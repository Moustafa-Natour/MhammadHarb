// Footer.js
import React, { useContext } from 'react';
import colors from '../constants/colors';
import { Link } from 'react-router-dom';
import '../constants/font.css';
import UserContext from './UserContext';
import { AppBar, styled, useTheme, Toolbar, ButtonGroup, Stack, IconButton, Typography } from '@mui/material';
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
                <Typography variant='body1' sx={{ fontFamily: 'PlayBold', color: colors.custPrimary }}>
                    &copy; 2023 <Link style={{ color: 'inherit', fontFamily: 'BlackOpsOne', textDecoration: 'none' }} to="/">MHAMMAD HARB</Link> All rights reserved
                </Typography>
            </Toolbar>
        </MAppBar>
    );
}

export default Footer;
