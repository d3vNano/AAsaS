import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserDate({ nome, cpf, setNome, setCpf, ids }) {

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
      ids: [ids],
      name: nome,
      cpf: cpf
    });

    requisicao.then(navigate("../sucesso"))

  }

  return (

    <Formulário>
      <form onSubmit={handleForm}>
        <label htmlFor="User">Nome do comprador:</label>
        <input type="text" name="Name" value={nome} onChange={e => setNome(e.target.value)} />
        <br />
        <label htmlFor="User">CPF do comprador:</label>
        <input type="text" name="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
        <button type="submit">Reservar assentos(s)</button>
      </form>
    </Formulário>
  );
}

function Template() {
  return (
    <Gabarito>
      <div className="gab">
        <div className="bolinha sel"></div>
        <p>Selecionado</p>
      </div>
      <div className="gab">
        <div className="bolinha yep"></div>
        <p>Disponível</p>
      </div>
      <div className="gab">
        <div className="bolinha nop"></div>
        <p>Indisponível</p>
      </div>
    </Gabarito>
  );
}

function Footer({ day, hour, film }) {
  return (
    <FooterTable>
      <div className="poster">
        <img src={film.posterURL} alt="poster" />
      </div>
      <div>
        <p>{film.title}</p>
        <p>
          {day} - {hour}
        </p>
      </div>
    </FooterTable>
  );
}

function SeatsFunc({ seats, selected, setSelected, isAvailable, setIds }) {
  const select = isAvailable && selected.includes(seats.id);

  return (
    <>
      <div
        className={`seat ${select ? "sel" : isAvailable ? "yep" : "nop"}`}
        onClick={() => {
          if (!isAvailable || select) {
            return null;
          } setSelected(); setIds(select);
        }}
      >
        {seats.name}
      </div>
    </>
  );
}

function RenderSeats({ selected, setSelected, setIds }) {
  const [seats, setSeats] = useState([]);
  const { idSession } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSession}/seats`
    );

    promise.then((res) => {
      setSeats(res.data.seats);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <SeatChoice>
      {seats.map((seat, index) => (
        <SeatsFunc
          key={index}
          seats={seat}
          setSelected={() => setSelected([...selected, seat.id])}
          selected={selected}
          isAvailable={seat.isAvailable}
          setIds={setIds}
        />
      ))}
    </SeatChoice>
  );
}

function MovieSeats({ day, hour, film, selected, setSelected, nome, cpf, setNome, setCpf, ids, setIds }) {
  return (
    <SeatsTable>
      <p className="tittle">Selecione o(s) assento(s)</p>
      <RenderSeats selected={selected} setSelected={setSelected} setIds={setIds} />
      <Template />
      <UserDate nome={nome} cpf={cpf} setNome={setNome} setCpf={setCpf} ids={ids} />
      <Footer day={day} hour={hour} film={film} />
    </SeatsTable>
  );
}

export default MovieSeats;

const SeatsTable = styled.div`
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

const SeatChoice = styled.div`
  width: 375px;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .seat {
    width: 25px;
    height: 25px;
    margin: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    color: #000000;

    border-radius: 100%;
    border: 1px solid #808f9d;
    background-color: #c3cfd9;
  }

  .sel {
    background-color: #8dd7cf;
  }

  .yep {
    background-color: #c3cfd9;
  }

  .nop {
    background-color: #fbe192;
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

const Gabarito = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;

  .gab {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  }

  p {
    font-size: 13px;
  }

  .bolinha {
    width: 25px;
    height: 25px;

    margin-bottom: 5px;

    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  .sel {
    background-color: #8dd7cf;
  }

  .yep {
    background-color: #c3cfd9;
  }

  .nop {
    background-color: #fbe192;
  }
`;

const Formulário = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #293845;
  }

  input {
    width: 327px;
    height: 51px;
    margin-top: 5px;

    display: flex;
    flex-direction: column;

    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }

  button {
    width: 225px;
    height: 42px;
    margin-top: 50px;

    background-color: #E8833A;
    border: none;
    border-radius: 3px;

    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;

    cursor: pointer;
  }
`;
