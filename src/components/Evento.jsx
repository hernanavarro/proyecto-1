import React from 'react'

const Evento = () => {

  const eventoClick = () => {
    console.log('Me diste un click!')
  }

  return (
    <div>
      <hr />
      <h2>Eventos</h2>
      <button onClick={ () => eventoClick() }>Click</button>
    </div>
  )
}

export default Evento