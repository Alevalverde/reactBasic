/* El ESTADO es le conjunto de variables que van a tener los componentes en cierto momento dado.
El estado tiene 3 caracteristicas importantes:
    1- Es inmutable
    2- No se puede modificar directamente
    3- Es asincrono

Para hacer cambios es necesario utilizar setState();    
*/

import React, { Component } from "react";

function EstadoAHijo(props) {
 return (
  <div>
   <h3>{props.contadorHijo}</h3>
  </div>
 );
}

export default class Estado extends Component {
 constructor(props) {
  //Con el constructor se define el "estado"
  super(props); //Mandamos a llamar el constructor del objeto del cual hereda
  this.state = {
   //Este es el objeto del Estado
   contador: 0, //Esta es una variable del estado
  };

  // setInterval(() => {
  //     this.setState({
  //         contador: this.state.contador + 1
  //     });
  // },1000);
 }
 render() {
  return (
   <div>
    <h2>El State</h2>
    <p>{this.state.contador}</p>
    <EstadoAHijo contadorHijo={this.state.contador} />
   </div>
  );
 }
}
