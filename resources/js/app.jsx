import './bootstrap';
import '../css/app.css'
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import axios from 'axios';
import { createRoot } from 'react-dom';


import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import Register from './components/user/Register';
import EditProfile from './components/user/EditProfile';
import Login from './components/maintenance/auth/Login';


ReactDOM.createRoot(document.getElementById('example')).render(
    <BrowserRouter>
        <Login/> 
    </BrowserRouter>
);
