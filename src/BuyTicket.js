import styled from "styled-components";


export default function BuyTicket () {
    return (
        <>
            <Selection>
                <h2>Selecione o(s) assentos(s)</h2>
                <div>
                    
                </div>
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

function Chair () {
    return (
        <>
            <Chair>
                <span></span>
            </Chair>
        </>
    )
}

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