//La palabra reservada this en los casos de "class component" no funciona, hay que bindear el this de la clase. Hay que bindear desde el constructor para que todas las instancias en el metodo render tengan enlazado el this de la clase.

import React, { Component } from "react";

export class EventosES6 extends Component {
 constructor(props) {
  super(props);
  this.state = { contador: 0 };
  this.sumar = this.sumar.bind(this);
  this.restar = this.restar.bind(this);
 }

 sumar(e) {
  this.setState({
   contador: this.state.contador + 1,
  });
 }

 restar(e) {
  this.setState({
   contador: this.state.contador - 1,
  });
 }

 render() {
  return (
   <div>
    <h2>Eventos en Componente de Clase ES6</h2>
    <nav>
     <button onClick={this.sumar}>+</button>
     <button onClick={this.restar}>-</button>
    </nav>
    <h3>{this.state.contador}</h3>
   </div>
  );
 }
}

//Properties Initializer
export class EventosES7 extends Component {
 state = { contador: 0 };

 //los métodos se hacen con arrow functions, puesto que heredan el this del contexto en el que se encuentran
 sumar = (e) => {
  this.setState({
   contador: this.state.contador + 1,
  });
 };

 restar = (e) => {
  this.setState({
   contador: this.state.contador - 1,
  });
 };

 render() {
  return (
   <div>
    <h2>Eventos en Componente de Clase ES7</h2>
    <nav>
     <button onClick={this.sumar}>+</button>
     <button onClick={this.restar}>-</button>
    </nav>
    <h3>{this.state.contador}</h3>
   </div>
  );
 }
}

function Boton(props) {
 return <button onClick={props.myOnClick}>Botón hecho componente</button>;
}

//Para pasar un parametro o más a la hora de que se ejecute un evento esta es la forma.
export class MasSobreEventos extends Component {
 //capa adicional que React utiliza para envolver los eventos
 handleClick = (e, mensaje) => {
  //manejador de eventos
  console.log(e);
  console.log(e.nativeEvent); // de esta manera se accede al evento nativo
  console.log(e.target); // Manda a consola la etquiqueta sobre la que funciona el evento
  console.log(mensaje);
 };

 render() {
  return (
   <div>
    <h2>Más Sobre Eventos</h2>
    <button
     onClick={(e) =>
      this.handleClick(e, "Hola, pasando parametro desde un evento")
     }
    >
     Saludar
    </button>

    {/*Evento Personalizado*/}
    {/*<Boton onClick ={(e)=> this.handleClick(e,"Hola, pasando parametro desde un evento")}/>*/}
    <Boton
     myOnClick={(e) =>
      this.handleClick(e, "Hola, pasando parametro desde un evento")
     }
    />
   </div>
  );
 }
}
