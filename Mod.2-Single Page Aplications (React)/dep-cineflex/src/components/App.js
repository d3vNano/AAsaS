import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCss from "../css/ResetCss";
import GlobalStyles from "../css/GlobalStyles";

import Header from "./Header";
import MoviesList from "./MoviesList";
import MoviesSchedule from "./MoviesSchedule";
import MovieSeats from "./MovieSeats";
import Success from "./Success";

import { useState } from "react";

export default function App() {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [film, setFilm] = useState([]);
  const [ids, setIds] = useState([]);

  const [selected, setSelected] = useState([]);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <BrowserRouter>
      <ResetCss />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route
          path="/sessoes/:idFilm"
          element={<MoviesSchedule setDay={setDay} setDate={setDate} setHour={setHour} setFilm={setFilm} film={film} />}
        />
        <Route
          path="/assentos/:idSession"
          element={<MovieSeats day={day} hour={hour} film={film} selected={selected} setSelected={setSelected} nome={nome} cpf={cpf} setNome={setNome} setCpf={setCpf} ids={ids} setIds={setIds} />}
        />
        <Route path="/sucesso" element={<Success date={date} day={day} hour={hour} film={film} selected={selected} nome={nome} cpf={cpf} ids={ids} />} />
      </Routes>
    </BrowserRouter>
  );
}
