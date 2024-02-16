import React from "react";
import './css/botónClear.css'

const BotónClear = (props) => (
  <div className="botón-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotónClear;