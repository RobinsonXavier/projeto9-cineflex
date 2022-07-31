import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Movie from "./Movie";

import styled from "styled-components";

export default function NavPage () {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
        
        promise.catch(console.log(promise));

        promise.then((res) => {
            setMovies(res.data)
        })
    }, []);

    return (
        <>
            <MainPage>
                <h2>Selecione o filme</h2>
                <div>
                    {movies.map((element, index) => 
                    <Link key={index} to={`/sessoes/${element.id}`}>
                        <Movie image={element.posterURL} /> 
                    </Link>)}
                </div>
            </MainPage>
        </>
    )
}

const MainPage = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #E5E5E5;
    margin-top: 67px;

    display: flex;
    align-items: center;
    flex-direction: column;

    & > div {
        display: flex;
        flex-wrap: wrap;

    }
    h2 {
        color: #293845;
        margin: 35px 0;
    }
`;