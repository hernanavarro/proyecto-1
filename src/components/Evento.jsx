import React, { useState } from 'react'

const Evento = () => {

  const [texto, setTexto] = useState('Texto desde estado');

  const eventoClick = () => {
    console.log('Me diste un click!');
    setTexto('Cambiando el texto');
  }

  return (
    <>
      <hr />
      <h2>{ texto }</h2>
      <button onClick={ () => eventoClick() }>Click</button>
    </>
  )
}

export default Evento