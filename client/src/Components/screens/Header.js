import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import colors from '../constants/colors';
import LoginModal from './LoginModal';
import { useAuth } from './auth';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { AppBar, Box, useTheme, styled, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline, Drawer, Toolbar, ButtonGroup, Stack, IconButton, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import '../constants/font.css';
import '../css/Header.css';
import UserContext from './UserContext';

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
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function Header() {
    const { login, logout } = useAuth();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const { isUserLoggedIn, user, open, setOpen } = useContext(UserContext);
    const theme = useTheme();
    const navigate = useNavigate();

    const handleNavigation = (text) => {
        let path;
        switch (text) {
            case 'Home':
                path = '/';
                break;
            case 'About Us':
                path = '/about';
                break;
            case 'Biography':
                path = '/bio';
                break;
            case 'Services':
                path = '/services';
                break;
            case 'Calendar':
                path = '/calendar';
                break;
            case 'Dashboard':
                path = '/dashboard';
                break;
            case 'Images':
                path = '/images';
                break;

            default:
                return null;

        }

        navigate(path);
        handleDrawerClose(); // Close the drawer after navigation
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MAppBar position='fixed' open={open} sx={{ backgroundColor: colors.custSecondary }}>
                <Toolbar>
                    <Stack edge='start' direction='row' spacing={2} sx={{ flexGrow: 1 }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography edge='start' align='center' variant='h6'
                            sx={{
                                fontFamily: 'BlackOpsOne',
                                align: 'center',
                                color: colors.custPrimary,
                                fontSize: { xs: 20, sm: 20, md: 22, lg: 26, xl: 30 }
                            }}>
                            MHAMMAD HARB
                        </Typography>
                    </Stack>
                    <Stack direction='row' edge='end' spacing={2}>
                        <ButtonGroup variant='outline' edge='end'>
                            {isUserLoggedIn ? (
                                <>
                                    <Avatar alt="Error" src={user?.profilePhoto} />
                                    <IconButton>
                                        <Link className='icon-links' onClick={logout}>
                                            <LogoutIcon />
                                        </Link>
                                    </IconButton>
                                </>
                            ) : (
                                <>
                                    <IconButton>
                                        <Link className='icon-links' onClick={toggleLoginModal}>
                                            <LoginIcon />
                                        </Link>
                                    </IconButton>
                                    <LoginModal
                                        isOpen={isLoginModalOpen}
                                        onRequestClose={toggleLoginModal}
                                        onLogin={login}
                                    />
                                </>
                            )}
                        </ButtonGroup>
                    </Stack>
                </Toolbar>
            </MAppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Home', 'About Us', 'Biography', 'Services', isUserLoggedIn && 'Calendar'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => handleNavigation(text)}>
                                <ListItemIcon>
                                    {(() => {
                                        switch (text) {
                                            case 'Home':
                                                return <HomeIcon />;
                                            case 'About Us':
                                                return <AccountBalanceIcon />;
                                            case 'Biography':
                                                return <ChangeHistoryIcon />;
                                            case 'Services':
                                                return <PointOfSaleIcon />;
                                            case 'Calendar':
                                                return <CalendarMonthOutlinedIcon />;
                                            default:
                                                return null;
                                        }
                                    })()}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                {isUserLoggedIn ? (
                    <>
                        <Divider />
                        <List>
                            {['Dashboard', 'Images', 'Logs', 'Users'].map((text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton onClick={() => handleNavigation(text)}>
                                        <ListItemIcon>
                                            {(() => {
                                                switch (text) {
                                                    case 'Dashboard':
                                                        return <DashboardIcon />;
                                                    case 'Images':
                                                        return <AccountBalanceIcon />;
                                                    case 'Logs':
                                                        return <ChangeHistoryIcon />;
                                                    case 'Users':
                                                        return <PointOfSaleIcon />;
                                                    default:
                                                        return null;
                                                }
                                            })()}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </>
                ) : null}
            </Drawer>
        </Box>
    );
}
export default Header;
