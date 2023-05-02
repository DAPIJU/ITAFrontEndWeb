import { Routes, Route, Navigate } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Menu from "./Menu";
import Register from "./user/Register";
import Login from "./maintenance/auth/Login";
import Home from "./Home";
import MaintenanceRequest from "./maintenance/Request/MaintenanceRequest";
import ActiveRequest from "./maintenance/Request/ActiveRequest";
import RequestHistory from "./maintenance/Request/RequestHistory";
import WorkOrders from "./maintenance/orders/WorkOrders";
import NewOrder from "./maintenance/orders/newOrder";
import Profile from "./user/Profile";
import Footer from "./Footer";
import EditProfile from "./user/EditProfile";
import Orders from "./maintenance/orders/Orders";
//import NotFound from './NotFound';

/*

<Routes>
            <Route path="/laravel/topicos/public/" element={<Menu /> } >
                <Route path="login" element={<Login /> } />
                <Route path="register" element={<Register /> } />
                <Route path="*" element={<Navigate replace to="/"/> } />
            </Route>
        </Routes>

*/

function Main() {
    return (
        <Routes>
            <Route path="ITAFrontEndWeb/public/" element={<Login />} >
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<Register />} >
                <Route path="register" element={<Register />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                <Route path="Menu" element={<Menu />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<Home />} >
                <Route path="home" element={<Home />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<Profile />} >
                <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<EditProfile />} >
                <Route path="editprofile" element={<EditProfile />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<MaintenanceRequest />} >
                <Route path="maintenancerequest" element={<MaintenanceRequest />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<ActiveRequest />} >
                <Route path="activeRequest" element={<ActiveRequest />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<RequestHistory />} >
                <Route path="requestHistory" element={<RequestHistory />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<WorkOrders />} >
                <Route path="workorders" element={<WorkOrders />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<NewOrder />} >
                <Route path="neworder" element={<NewOrder />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<Orders />} >
                <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<Footer />} >
                <Route path="footer" element={<Footer />} />
            </Route>
            </Routes>
    )
}

export default Main;