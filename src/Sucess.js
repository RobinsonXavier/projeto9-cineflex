import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

export default function Sucess ({userName, cpf, name, date, hourDay,
     setSeat, seatName, setSeatName, setUserName, setCpf, setName, setWeekday, setHourDay, setDate}) {

    const navigate = useNavigate();

    return (
        <>
            <SucessPage>
                <h1>Pedido feito com sucesso!</h1>

                <div>
                    <h2>Filme e sessão</h2>
                    <span>{name}</span>
                    <span>{date} {hourDay}</span>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    {seatName.map((element, index) => <span key={index} >Assento {element}</span>)}
                </div>
                <div>
                    <h2>Comprador</h2>
                    <span>Nome: {userName}</span>
                    <span>CPF: {cpf}</span>
                </div>

                <button onClick={() => {
                    setSeat([]);
                    setSeatName([]);
                    setUserName('');
                    setCpf('');
                    setName('');
                    setWeekday('');
                    setHourDay('');
                    setDate('');
                    navigate('/');
                    
                }}>Voltar pra home</button>

            </SucessPage>
        </>
    )
}

const SucessPage = styled.div`
    margin-top: 67px;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        display: block;
        width: 180px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        color: #247A6B;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 70px;
    }

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin: 20px;
    }

    span {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 22px;
        color: #293845;
        margin: 0 22px;
    }

    button {
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        font-size: 18px;
        color: #ffffff;
        border: none;
        border-radius: 3px;
        margin: 60px auto;
    }

`;