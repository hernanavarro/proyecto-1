import React from 'react'

const Contador = () => {

  const [contador, setContador] = React.useState(0);

  // const aumentar = () => {
  //   setContador(contador + 1);
  // }

  return (
    <div>
      <h2>Contador</h2>
      <h3>Nuestro numero aumentando: { contador }</h3>
      <button onClick={ () => setContador(contador + 1) }>Aumentar</button>
    </div>
  )
}

export default Contador