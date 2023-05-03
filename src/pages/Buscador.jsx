import React, { useState, useEffect } from "react";
import axios from "axios";

const Buscador = () => {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState([]);
  const [seleccionResultado, setSeleccionResultado] = useState(null);

  useEffect(() => {
    buscaBaseDeDatos("");
  }, []);

  const buscaBaseDeDatos = (query) => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/cursos", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        setResultado(response.data);
        setSeleccionResultado(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleInputChange(event) {
    const query = event.target.value;
    setQuery(query);
    buscaBaseDeDatos(query);
  }

  function handleResultClick(result) {
    setSeleccionResultado(result);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {resultado.map((result) => (
          <li
            key={result._id}
            className={seleccionResultado === result ? "selected" : ""}
            onClick={() => handleResultClick(result)}
          >
            {result.title}
          </li>
        ))}
      </ul>
      {seleccionResultado && (
        <div>
          <h2>{seleccionResultado.title}</h2>
          <p>{seleccionResultado.description}</p>
        </div>
      )}
    </div>
  );
};

export default Buscador;
