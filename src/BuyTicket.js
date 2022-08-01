import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";


export default function BuyTicket ({setSeat, seat, setCpf, setUserName, userName, cpf}) {

    const [selection, setSelection] = useState(0); 
    const [seats, setSeats] = useState([]);
    const {idSessao} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => {
            console.log(res.data)
            setSelection(res.data)
            setSeats(res.data.seats)
        })

    }, [])

    function reserveSeats (event) {
        event.preventDefault();

        const request = axios.post(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`, {
            ids: seat,
            name: userName,
            cpf: cpf
        });

        request.then(() => {
            navigate('/sucesso');
        })
    }
    console.log(seat)
    console.log(selection)
    return (
        <>
            <Selection>
                <h2>Selecione o(s) assentos(s)</h2>
                <Seats>
                    {seats.map((element, index) => <Chair key={index} seat={seat} setSeat={setSeat} id={element.id} name={element.name} isAvailable={element.isAvailable} />)}
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
                <form onSubmit={reserveSeats}>
                    <h3>Nome do comprador:</h3>
                    <input type='text' placeholder='Digite seu nome...' required onChange={e => setUserName(e.target.value)} />
                    <h3>CPF do comprador:</h3>
                    <input type='number' placeholder='Digite seu CPF...' required onChange={e => setCpf(e.target.value)} />
                    <button type='submit'>Reserver Assento(s)</button>
                </form>
                <Bottom>
                    <div>
                        <img src={selection ? selection.movie.posterURL : ''} alt=''/>
                    </div> 
                    <footer>
                        <span>{selection ? selection.movie.title : 'Carregando...'}</span>
                        <span>{selection ? selection.day.weekday : 'Carregando o dia'} - {selection ? selection.name : 'Carregando a hora'}</span>
                    </footer>     
                </Bottom>
            </Selection>
        </>
    )
}

function Chair ({name, isAvailable, setSeat, seat, id}) {
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
                if (color === colorAvailable) {
                    setColor('#8DD7CF');
                    setBorder('#1AAE9E');
                    setSeat([...seat, id]);
                } else if (color === '#8DD7CF') {
                    setColor(colorAvailable);
                    setBorder(borderAvailable);
                    if(seat.length === 1) {
                        setSeat([]);
                    } else {
                        let arr = [];
                        for (let i = 0; i < seat.length -1; i++) {
                            arr[i] = seat[i]  
                        }
                        setSeat(arr);

                    }
                } else {
                    return alert('Esse assento não está disponível');
                }

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