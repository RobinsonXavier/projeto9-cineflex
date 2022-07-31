import styled from "styled-components";

export default function Pass ({hour, hourTwo, weekday, date}) {
    return (
        <>
            <TicketPage>
                <span>{weekday} - {date}</span>
                <div>
                    <Time>{hour}</Time>
                    <Time>{hourTwo}</Time>
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
    margin-right: 10px;
`;