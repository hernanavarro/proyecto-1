import React from 'react'

const Variables = () => {
  const saludo = 'Hola desde constante'
  const imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaXnmLa6ml-BEKPuR2_d2Ugr4txvbwG0_4Q&usqp=CAU'
  return (
    <div>
        <h2>Nuevo componente { saludo }</h2>
        <img src={imagen} alt=""/>
    </div>
  )
}

export default Variables