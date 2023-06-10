import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { Link } from "react-router-dom";

function MovieFunc ({ id, url }) {
    return (
        <Movie>
            <Link to={`/sessoes/${id}`}>
                <img src={url} alt="url"/>
            </Link>
        </Movie>
    )
}

function RenderMovies () {

    const [movies, setMovies] = useState([]);

    useEffect (() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        
        promise.then(res => {
            setMovies([...res.data])
        })
        // eslint-disable-next-line
    }, []);

    return (
        <Movies>
            {movies.map((movie, index) => 
                <MovieFunc 
                    key={index}
                    id={movie.id}
                    url={movie.posterURL}
                />
            )}
        </Movies>
    )
}

export default function MoviesList () {
    return (
        <MoviesTable>
            <p>Selecione o filme</p>
                <RenderMovies />
        </MoviesTable>
    )
}

const MoviesTable = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin-bottom: 35px;
        font-weight: 400;
        font-size: 24px;
        color: #293845;
        letter-spacing: 0.04em;
        text-align: center;
    }
`
const Movies = styled.div`
    width: 400px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Movie = styled.div`
    width: 145px;
    height: 209px;
    margin-bottom: 15px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 129px;
        height: 193px;
    }

`