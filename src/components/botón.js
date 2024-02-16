import React from "react";
import './css/botón.css'

function Botón( props ) {
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }
  return (
    <div className={`botón-contenedor ${esOperador(props.children) ? 'operador' : null}`} onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}

export default Botón 