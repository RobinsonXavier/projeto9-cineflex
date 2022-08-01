import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';
import Top from "./Top";
import NavPage from './NavPage';
import BuyTicket from './BuyTicket';
import Session from './Session';
import Sucess from './Sucess';

export default function App () {
    const [userName, setUserName] = useState('');
    const [cpf, setCpf] = useState('');
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
                <Route path='/assentos/:idSessao' element={<BuyTicket setCpf={setCpf} setUserName={setUserName} 
                setSeat={setSeat} seat={seat} userName={userName} cpf={cpf}  />} />
                <Route path='/sessoes/:idFilme' element={<Session setHourDay={setHourDay}
                setDate={setDate} setWeekday={setWeekday} setName={setName} />} />
                <Route path='/sucesso' element={<Sucess userName={userName} cpf={cpf} name={name} date={date} 
                hourDay={hourDay} seat={seat} />} />
            </Routes>
        </BrowserRouter>
    )
}
