import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import styled from "styled-components";


export default function BuyTicket ({setSeat, seat}) {

    const [selection, setSelection] = useState({}); 
    const [seats, setSeats] = useState([]);
    const {idSessao} = useParams();

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => {
            console.log(res.data)
            setSelection(res.data)
            setSeats(res.data.seats)
        })

    }, [])

    console.log(seats)
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

    h2 {
        margin: 35px;
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 24px;
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