import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';
import Top from "./Top";
import NavPage from './NavPage';
import BuyTicket from './BuyTicket';
import Session from './Session';

export default function App () {

    const [click, setClick] = useState(true);
    const [name, setName] = useState('');
    const [weekday, setWeekday] = useState('');
    const [hourDay, setHourDay] = useState('');
    const [date, setDate] = useState('');
    const [seat, setSeat] = useState([]);

    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path='/' element={<NavPage />} />
                <Route path='/assentos/:idSessao' element={<BuyTicket setSeat={setSeat} seat={seat} />} />
                <Route path='/sessoes/:idFilme' element={<Session setHourDay={setHourDay}
                setDate={setDate} setWeekday={setWeekday} setName={setName} />} />
            </Routes>
        </BrowserRouter>
    )
}
