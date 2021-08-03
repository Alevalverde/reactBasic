import "./App.css";
import React from "react";
import logo from "./logo.svg";
import Componente from "./Components/Componente";
import Propiedades from "./Components/Propiedades";
import Estado from "./Components/Estado";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./Components/Eventos";
import Padre from "./Components/ComunicacionComponentes";
import CicloVida from "./Components/CicloVida";
import ContadorHooks from "./Components/ContadorHooks";

//import { compose } from 'async';

function App() {
 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

    <section>
     <Componente msg="Hola soy un componenete desde una prop" />
     <hr />
     <Propiedades
      cadena="Esto es una cadena de texto"
      numero={14}
      booleano={false}
      arreglo={[1, 2, 3]}
      objeto={{ nombre: "Ale", correo: "alevalverdev8@hotmail.com" }}
      funcion={(numero) => numero * numero}
      elementoReact={<i>Esto es un elemento React</i>}
      componenteReact={<Componente msg="Soy un componente pasado como prop" />}
     />
     <hr />
     <Estado />
     <hr />
     <RenderizadoCondicional />
     <hr />
     <RenderizadoElementos />
     <hr />
     <EventosES6 />
     <hr />
     <EventosES7 />
     <hr />
     <MasSobreEventos />
     <hr />
     <Padre />
     <hr />
     <CicloVida />
     <hr />
     <ContadorHooks />
    </section>
   </header>
  </div>
 );
}

export default App;
