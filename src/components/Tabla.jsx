import { useState } from "react";
import "./Tabla.css";

const Tabla = ({ datos }) => {
  const [seleccionResultado, setSeleccionResultado] = useState(null);

  const gestorSeleccion = (dato) => {
    setSeleccionResultado(dato);
    console.log(dato);
  };

  return (
    <table className="tabla">
      <tbody>
        <tr>
          <th>Curso</th>
          <th>Docente</th>
          <th>Opción</th>
          <th>Aula</th>
          <th>Precio</th>
        </tr>
        {datos.map((dato) => (
          <tr key={dato._id} onClick={() => gestorSeleccion(dato)}>
            <td>{dato.curso}</td>
            {dato.docente !== null ? (
              <td>{dato.docente.nombre}</td>
            ) : (
              <td>No Asignado</td>
            )}
            <td>{dato.opcion}</td>
            <td>{dato.aula}</td>
            <td>{dato.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
