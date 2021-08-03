//https://www.youtube.com/watch?v=PKKhpVC9_qM
import React, { useState } from "react";

export default function ContadorHooks(props) { //puede recibir propiedades
 //hay que desestructurar el useState, en este caso contador y setContador
 const [contador, setContador] = useState(0); //useState recibe el valor inicial
 const sumar = () => setContador(contador + 1);
 const restar = () => setContador(contador - 1);

 return (
  <>
   <h2>Hooks - useState</h2>
   <nav>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
   </nav>
   <p>Contador de {props.titulo}</p>
   <h3>{contador}</h3>
  </>
 );
}

ContadorHooks.defaultProps = {
    titulo: "Clicks",
}