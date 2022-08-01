import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import styled from "styled-components";


export default function BuyTicket ({setSeat, seat, setCpf, setUserName}) {

    const [selection, setSelection] = useState({}); 
    const [seats, setSeats] = useState([]);
    const {idSessao} = useParams();

    const blankName ='';

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => {
            console.log(res.data)
            setSelection(res.data)
            setSeats(res.data.seats)
        })

    }, [])

    console.log(selection)
    return (
        <>
            <Selection>
                <h2>Selecione o(s) assentos(s)</h2>
                <Seats>
                    {seats.map((element, index) => <Chair key={index} seat={seat} setSeat={setSeat} name={element.name} isAvailable={element.isAvailable} />)}
                </Seats>
                <Options>
                    <CheckSit>
                        <div></div>
                        <span>Selecionado</span>
                    </CheckSit>
                    <CheckSit>
                        <div></div>
                        <span>Disponivel</span>
                    </CheckSit>
                    <CheckSit>
                        <div></div>
                        <span>indisponível</span>
                    </CheckSit>
                </Options>
                <form>
                    <h3>Nome do comprador:</h3>
                    <input type='text' placeholder='Digite seu nome...' required onChange={e => setUserName(e.target.value)} />
                    <h3>CPF do comprador:</h3>
                    <input type='number' placeholder='Digite seu CPF...' required onChange={e => setCpf(e.target.value)} />
                    <button type='submit'>Reserver Assento(s)</button>
                </form>
                <Bottom>
                    <div>
                        <img src={selection.movie.posterURL} alt=''/>
                    </div> 
                    <footer>
                        <span>{selection.movie.title}</span>
                        <span>{selection.day.weekday} - {selection.name}</span>
                    </footer>     
                </Bottom>
            </Selection>
        </>
    )
}

function Chair ({name, isAvailable, setSeat, seat}) {
    const colorAvailable ='#C3CFD9';
    const borderAvailable='#7B8B99';
    const colorUnavailable='#FBE192';
    const borderUnavailable='#F7C52B';
    const [color, setColor] = useState('');
    const [border, setBorder] = useState('');

    useEffect(() => {

        if(isAvailable === true) {
            setColor(colorAvailable);
            setBorder(borderAvailable);
        }
    
        if(isAvailable === false) {
            setColor(colorUnavailable);
            setBorder(borderUnavailable);
        }

    },[]);
    
    

    return (
        <>
            <Seat onClick={() => {
                color === colorAvailable ? setColor('#8DD7CF') : setColor(color);
                border === borderAvailable ? setBorder('#1AAE9E') : setBorder(border);
                color === colorAvailable ? setSeat([...seat, name]) : setSeat(seat);

            }} color={color} border={border} >
                <span>{name}</span>
            </Seat>
        </>
    )
}

const Seat = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 50%;
    margin:12px 3.5px;

    & > span {
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        color: #000000;
    }
`;

const Selection = styled.div`
    background-color: #E5E5E5;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 67px;
    margin-bottom: 130px;

    h2 {
        margin: 35px;
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        width: 370px;
    }

    h3 {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: #293845;
        margin: 0 auto;
        margin-bottom: 3px;
        margin-top: 7px;
        width: 327px;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        height: 51px;
        width: 327px;
        text-align: start;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        margin: 0 auto;
    }

    button {
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        font-size: 18px;
        color: #ffffff;
        border: none;
        border-radius: 3px;
        margin: 30px auto;
    }

`;

const CheckSit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    span {
        font-family: 'Roboto', sans-serif;
        color: #4E5A65;
        font-size: 13px;
    }

    &:nth-child(1) {
        width: 25px;
        height: 25px;
        background-color: #8DD7CF;
        border: 1px solid #1AAE9E;
        border-radius: 50%;
    }

    &:nth-child(2) {
        width: 25px;
        height: 25px;
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
        border-radius: 50%;
    }

    &:nth-child(3) {
        width: 25px;
        height: 25px;
        background-color: #FBE192;
        border: 1px solid #F7C52B;
        border-radius: 50%;
    }
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;

    & > div > div {
        margin-bottom: 30px;
    }
`;

const Seats = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 360px;
    margin-bottom: 30px;
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

    & span {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 22px;
        color: #293845;
        margin-bottom: 3px;
    }
`;