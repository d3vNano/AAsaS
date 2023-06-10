import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Footer({ film }) {
  return (
    <FooterTable>
      <div className="poster">
        <img src={film.posterURL} alt="poster" />
      </div>
      <p>{film.title}</p>
    </FooterTable>
  );
}

function SessionsFunc({ setHour, setDay, setDate, id, weekday, date, showtimes }) {
  const navigate = useNavigate();

  return (
    <Choices>
      <div className="weekday">
        <p>
          {weekday} - {date}
        </p>
      </div>
      <div className="showtime">
        {showtimes.map((time, index) => (
          <button
            key={index}
            onClick={() => {
              setDay(weekday);
              setDate(date);
              setHour(time.name);
              navigate(`../assentos/${showtimes[index].id}`);
            }}
          >
            {time.name}
          </button>
        ))}
      </div>
    </Choices>
  );
}

function RenderSessions({ setDate, setDay, setHour, sessions, setSessions, setFilm }) {
  const { idFilm } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`
    );

    promise.then((res) => {
      setFilm(res.data);
      setSessions(res.data.days);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {sessions.map((session, index) => (
        <SessionsFunc
          key={index}
          id={index}
          date={session.date}
          weekday={session.weekday}
          showtimes={session.showtimes}
          setDay={setDay}
          setHour={setHour}
          setDate={setDate}
        />
      ))}
    </>
  );
}

function MoviesSchedule({ setDate, setDay, setHour, setFilm, film }) {

  const [sessions, setSessions] = useState([]);

  return (
    <SessionsTable>
      <p className="tittle">Selecione o horário</p>
      <RenderSessions
        sessions={sessions}
        setSessions={setSessions}
        setFilm={setFilm}
        setDay={setDay}
        setHour={setHour}
        setDate={setDate}
      />
      <Footer film={film} />
    </SessionsTable>
  );
}

export default MoviesSchedule;

const SessionsTable = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 25px;
  margin-bottom: 115px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .tittle {
    margin: 25px 0;
    font-size: 24px;
    text-align: center;
  }
`;

const Choices = styled.div`
  width: 350px;
  height: 100%;

  display: flex;
  flex-direction: column;

  .weekday {
    font-size: 20px;
    text-align: left;
    margin-bottom: 20px;
  }

  .showtime {
    margin-bottom: 20px;

    button {
      width: 83px;
      margin-right: 20px;
      height: 43px;
      border: none;

      font-size: 18px;
      letter-spacing: 0.02em;
      color: white;

      background-color: #e8833a;
      border-radius: 3px;
    }
  }
`;

const FooterTable = styled.div`
  width: 100%;
  height: 115px;

  position: fixed;
  bottom: 0;
  left: 0;

  background: #dfe6ed;
  border: 1px solid #9eadba;

  display: flex;
  align-items: center;
  justify-content: center;

  .poster {
    width: 75px;
    height: 100px;
    margin-right: 15px;

    background: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 65px;
    height: 90px;
    object-fit: cover;
  }

  p {
    width: 225px;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
  }
`;
