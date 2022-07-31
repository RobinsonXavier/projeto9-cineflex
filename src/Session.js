export default function Session () {
    return (
        <>
            <SessionPage >
                <h2>Selecione o horário</h2>
                <Ticket />
            </SessionPage>
        </>
    )
}


function Ticket () {
    return (
        <>
            <div>
                <span></span>
                <div>
                    <Time></Time>
                    <Time></Time>
                </div>
            </div>
        </>
    )
}

