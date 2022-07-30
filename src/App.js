import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/reset.css';
import './assets/styles/style.css';
import Top from "./Top";
import NavPage from './NavPage';

export default function App () {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path='/' element={<NavPage />} />
            </Routes>

        </BrowserRouter>
    )
}
