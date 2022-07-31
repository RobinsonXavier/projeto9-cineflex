import {Link} from 'react-router-dom';

import styled from "styled-components";

export default function Pass ({hour, hourTwo, weekday, date, setHourDay, 
    setWeekday, setName, name, setDate, sessionId, sessionIdTwo}) {
    return (
        <>
            <TicketPage>
                <span>{weekday} - {date}</span>
                <div>
                    <Link to={`/assentos/${sessionId}`}>
                        <Time onClick={() => {
                            setHourDay(hour);
                            setWeekday(weekday);
                            setName(name);
                            setDate(date);
                        }} >{hour}
                        </Time>
                    </Link>
                    <Link to={`/assentos/${sessionIdTwo}`}>
                        <Time onClick={() => {
                            setHourDay(hourTwo);
                            setWeekday(weekday);
                            setName(name);
                        }} >{hourTwo}
                        </Time>
                    </Link>
                    
                </div>
            </TicketPage>
        </>
    )
}

const TicketPage = styled.div `
    background-color: #E5E5E5;
   

    span {
        font-size: 20px;
        color: #293845;
        line-height: 35px;
    }

    & > div {
        display: flex;
        justify-content: flex-start;
    }

    a {
        margin-right: 10px;
        text-decoration: none;
    }
`;

const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8833A;
    font-size: 18px;
    color: #ffffff;
    width: 83px;
    height: 43px;
    border-radius: 3px;
`;