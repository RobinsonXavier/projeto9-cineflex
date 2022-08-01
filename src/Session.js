import {useState, useEffect} from 'react';
import axios from "axios";

import { useParams } from "react-router-dom";

import styled from "styled-components";

import Pass from './Pass';



export default function Session ({setHourDay, setWeekday, setName, setDate}) {
    const [session, setSession] = useState({});
    const [sessionDays, setSessionDays] = useState([]);
    const {idFilme} = useParams();


    useEffect(() => {   
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.catch(() => console.log(promise));

        promise.then((res) => {
            setSession(res.data);
            setSessionDays(res.data.days);

        })

    }, []);

    return (
        <>
            <SessionPage>
                <h2>Selecione o horário</h2>
                <div>
                    {sessionDays.map((element, index) => 
                        <Pass key={index} setHourDay={setHourDay} setWeekday={setWeekday} setName={setName} 
                        weekday={element.weekday} date={element.date} name={session.title} setDate={setDate}
                        hour={element.showtimes[0].name} hourTwo={element.showtimes[1].name}
                        sessionId={element.showtimes[0].id} sessionIdTwo={element.showtimes[1].id} />          
                    )}
                </div>
                <Bottom>
                    <div>
                        <img src={session.posterURL} alt=''/>
                    </div>   
                    <span>{session.title}</span>
                </Bottom>
            </SessionPage>
        </>
    )
}


const SessionPage = styled.div `
    background-color: #E5E5E5;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    margin-top: 67px;
    margin-bottom: 130px;

    h2 {
        margin: 35px;
        color: #293845;
        font-size: 24px;
    }
`;

const Bottom = styled.div`
    background-color: #9EADBA;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 120px;
    width: 100%;
    bottom: 0;
    z-index: 1;

    & > div {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 89px;
        margin:0 15px
    }
    & > div > img {
        width: 48px;
        height: 72px;
    }
`;