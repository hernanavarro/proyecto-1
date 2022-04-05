import React from 'react';
import Contador from './components/Contador';
import Evento from './components/Evento';
import Parrafo from './components/Parrafo';
import Variable from './components/Variables'


function App() {
  return (
    <div>
      <h1>Hola mundo React</h1>
      <Parrafo/>
      <Variable/>
      <Evento/>
      <Contador/>
    </div>
  );
}

export default App;
