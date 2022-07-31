import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';
import Top from "./Top";
import NavPage from './NavPage';
import BuyTicket from './BuyTicket';
import Session from './Session';

export default function App () {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path='/' element={<NavPage />} />
                <Route path='/assentos' element={<BuyTicket />} />
                <Route path='/sessoes' element={<Session />} />
            </Routes>
        </BrowserRouter>
    )
}
