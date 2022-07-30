import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';
import Top from "./Top";
import NavPage from './NavPage';
import BuyTicket from './BuyTicket';

export default function App () {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path='/' element={<NavPage />} />
                <Route path='/Buyticket' element={<BuyTicket />} />
            </Routes>
        </BrowserRouter>
    )
}
