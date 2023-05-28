import React, {useState,useEffect} from "react";
import { HashRouter as Router} from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import ActiveRequests from "./maintenance/request/ActiveRequest";
import RequestHistory from "./maintenance/request/RequestHistory";
import Earring from "./maintenance/orders/Earring";
import Release from "./maintenance/orders/Release";
import Approved from "./maintenance/orders/Approved";
import NewOrder from "./maintenance/orders/NewOrder";
import Login from "./maintenance/auth/Login";
import Profile from "./user/Profile";
import EditProfile from "./user/EditProfile";
import Register from "./user/Register";
import ReleaseOrder from "./maintenance/orders/ReleaseOrder";
import { useLocalStorage } from "react-use";
import PrivateRoute from "./PrivateRoute";

//import NotFound from './NotFound';q

function Main() {
    const [user,setUser] = useLocalStorage('user-info');
    
    return (
        
        <Routes>

            {/*####################################################################
            ###########################--[ LOGIN ]--#######################################*/}

            <Route path="ITAFrontEndWeb/public/" element={<Login />} >
                <Route path="login" element={<Login />} />
            </Route>

            {/*####################################################################
            ###########################--[ HOME ]--########################################*/}
            <Route element={<PrivateRoute canActivate={user} 
            redirectPath="ITAFrontEndWeb/public/login"/>}>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="home" element={<Home />}/>
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Route>
                

            {/*####################################################################
            ##########################--[ REQUESTS ]--########################################*/}
            <Route element={<PrivateRoute canActivate={user} 
            redirectPath="ITAFrontEndWeb/public/login"/>}>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="activeRequest" element={<ActiveRequests />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Route>
            <Route element={<PrivateRoute canActivate={user} 
            redirectPath="ITAFrontEndWeb/public/login"/>}>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="requestHistory" element={<RequestHistory />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Route>

            {/*####################################################################
            ###########################--[ ORDERS ]--########################################*/}

            <Route element={<PrivateRoute canActivate={user} 
            redirectPath="ITAFrontEndWeb/public/login"/>}>

                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="earring" element={<Earring />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="release" element={<Release />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="approved" element={<Approved />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="newOrder/:id" element={<NewOrder />} />
                    {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
                </Route>
            
            

                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="releaseOrder" element={<ReleaseOrder />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Route>
            {/*<Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                <Route path="editOrder/:id" element={<EditOrder />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>

            {/*####################################################################
            ###########################--[ USERS ]--########################################*/}
            <Route element={<PrivateRoute canActivate={user} 
            redirectPath="ITAFrontEndWeb/public/login"/>}>

            
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="editProfile" element={<EditProfile />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
                <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Main;

/*
<Routes>
            <Route path="/laravel/topicos/public/" element={<Menu /> } >
                <Route path="login" element={<Login /> } />
                <Route path="register" element={<Register /> } />
                <Route path="*" element={<Navigate replace to="/"/> } />
            </Route>
        </Routes>
*/