import React from "react";

export default function Propiedades(props) {
 return (
  <div>
   <h2>{props.porDefecto}</h2>
   <ol>
    <li>{props.cadena}</li>
    <li>{props.numero}</li>
    <li>{props.booleano ? "True" : "False"}</li>
    <li>{props.arreglo.join(", ")}</li>
    <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
    <li>{props.arreglo.map(props.funcion)}</li>
    <li>{props.elementoReact}</li>
    <li>{props.componenteReact}</li>
   </ol>
  </div>
 );
}

Propiedades.defaultProps = {
 porDefecto: "Las Props",
};
