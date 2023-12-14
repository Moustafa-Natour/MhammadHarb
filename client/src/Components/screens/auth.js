import { useContext } from 'react';
import { auth, FacebookAuth, GoogleAuth } from '../constants/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "@firebase/auth";
import UserContext from './UserContext';
import axios from 'axios';
import { baseURL } from '../constants/constant';

export const useAuth = () => {
    const { setIsUserLoggedIn, setUser } = useContext(UserContext);


    // const axiosFetchData = async (processing) => {
    //     await axios.get('http://localhost:4000/users')
    //         .then(res => {
    //             if (processing) {
    //                 setSelectData(res.data)
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }



    const axiosPostData = async (displayName, phoneNumber, email) => {
        console.log(displayName, phoneNumber, email);
        const postData = {
            name: displayName,
            email: email,
            phoneNumber: phoneNumber,
            role: 'client',
        };
        await axios.post(`${baseURL}/saveUser`, postData)
            .then(res =>
                console.log(res.data)
            )

    };

    const createUser = (email, phoneNumber, displayName, profilePhoto, role) => {
        return {
            email,
            phoneNumber,
            displayName,
            profilePhoto,
            role,
        };
    };

    const loginWithFacebook = async () => {
        try {
            const authedUser = await FacebookAuth();
            console.log('authedUser: ', authedUser);
            const currentUser = authedUser.user;
            fetch(`https://graph.facebook.com/${authedUser._tokenResponse.localId}/picture?type=large&access_token=${authedUser._tokenResponse.oauthAccessToken}`).then((response) => response.blob()).then((blob) => {
                const user1 = createUser(currentUser.email, currentUser.phoneNumber, currentUser.displayName, URL.createObjectURL(blob), 'client');
                setUser(user1);
                axiosPostData(currentUser.email, currentUser.phoneNumber, currentUser.displayName);
                console.log('User: ', user1);
            });
            setIsUserLoggedIn(true);
            localStorage.setItem("user", authedUser);
            console.log('Fb User: ', authedUser);
        } catch (error) {
            console.error('Facebook login error:', error);
        }
    };

    const loginWithGoogle = async () => {
        try {
            const authedUser = await GoogleAuth();
            setIsUserLoggedIn(true);
            setUser(authedUser);
            localStorage.setItem("user", authedUser);
            console.log('Google User: ', authedUser);
        } catch (error) {
            console.error('Google login error:', error);
        }
    };

    const createClientUser = async (name, email, password) => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    sendEmailVerification(auth.currentUser).then(() => {
                        alert("An email was sent containing the verification code ");
                    })
                    setIsUserLoggedIn(true);
                    setUser(email);
                    //TODO add email to newsletter
                    axiosPostData(email, name, password);
                    localStorage.setItem("email", email);
                    return true;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Login error:', error);
                    setIsUserLoggedIn(false);
                    return false;
                });

        } catch (error) {
            console.error('Register error:', error);
            setIsUserLoggedIn(false);
            return false;
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsUserLoggedIn(true);
            setUser(email);
            localStorage.setItem("email", email);
            return true;
        } catch (error) {
            console.error('Login error:', error);
            setIsUserLoggedIn(false);
            return false;
        }
    };
    const logout = async () => {
        try {
            await signOut(auth);
            setIsUserLoggedIn(false);
            setUser(null);
            localStorage.clear();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return { createClientUser, login, logout, loginWithGoogle, loginWithFacebook };
};

