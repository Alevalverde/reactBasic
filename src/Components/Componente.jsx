import React, { Component } from "react";

//EXISTER 3 FORMAS PARA DEFINIR UN COMPONENTE:

//-->Este es un COMPONENTE BASADO EN CLASE, pero con la llegada de los hooks ya casi que no se utilizan
class Componente extends Component {
 render() {
  //permite renderizar el codigo jsx
  return <h2>{this.props.msg}</h2>;
 }
}

//-->COMP CON FUNCION DECLARADA: Este es un componente funcional declarado
/*function Componente(props) {
    return <h2>{props.msg}</h2>
}*/

//-->COMP CON FUNCION EXPRESADA: Este es un componente funcional expresado
// const Componente = props => <h2>{props.msg}</h2>

export default Componente;
