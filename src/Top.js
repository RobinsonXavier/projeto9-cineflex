import React from 'react';

import styled from 'styled-components';

export default function Top () {
    return (
        <>
            <Container>
                <h1>CINEFLEX</h1>
            </Container>
        </>
    )
}

const Container = styled.div`
background-color: #C3CFD9;
width: 100%;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
z-index: 1;

h1 {
    font-family: 'Roboto', sans-serif; 
    font-size: 34px;
    color: #E8833A;
}
`;