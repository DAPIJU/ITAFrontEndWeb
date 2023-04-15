import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import Register from "./Register";
import Login from "./Login";
import M_Maintenance from "./Maintenance/M_Maintenance";
import NavBar from "./Maintenance/NavBar";
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
            <Route path="ITAFrontEndWeb/public/" element={<Menu />} >
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<NavBar />} >
                <Route path="navbar" element={<NavBar />} />
            </Route>
            <Route path="ITAFrontEndWeb/public/" element={<M_Maintenance />} >
                <Route path="m_maintenance" element={<M_Maintenance />} />
            </Route>
            
        </Routes>
    )
}

export default Main;