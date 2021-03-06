import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  setMostrarPregunta,
}) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };

  const agregarPresupusto = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Ingrese su Presupuesto</h2>
      {error ? <Error mensaje="Ingrese un Presupuesto Valido" /> : null}

      <form onSubmit={agregarPresupusto}>
        <input
          type="number"
          placeholder="Ingrese su presupuesto"
          className="u-full-width"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          value="Confirmar"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
