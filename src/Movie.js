import styled from "styled-components";

export default function Movie ({image}) {
    return (
        <>
            <MovieLayout>
                <img src={image} alt='' />
            </MovieLayout>
        </>
    )
}

const MovieLayout = styled.div`
    height: 209px;
    width: 145px;
    background-color: #ffffff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin: 15px;

    img {
        height: 193px;
        width: 129px;
    }
`