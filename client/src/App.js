import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/screens/Header';
import Footer from './Components/screens/Footer';
import AppRoutes from './Components/screens/Routes'; // Import the routes configuration
import UserContext from './Components/screens/UserContext';
import { styled, useTheme } from '@mui/material';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const userValues = { isUserLoggedIn, setIsUserLoggedIn, user, setUser, open, setOpen };
  const theme = useTheme();

  const drawerWidth = 240;
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
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
  return (
    <UserContext.Provider value={userValues}>
      <Router>
        <div className="App">
          <Header />
          <Main open={open} className="App-main">
            <AppRoutes /> {/* Use the imported routes */}
          </Main>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
