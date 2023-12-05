
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VerReservas() {
  const [dados, setDados] = useState([]);


  useEffect(() => {
    puxar();
  }, []);


  const puxar = async () => {
    axios.get(`http://127.0.0.1:8000/reservas/`)
    .then((response) => {
        console.log(response)
        
        setDados(response.data);
}).catch(function(error){
    console.log(error)
})
    };
  return (
    <div>
      <h2>Lista de Itens</h2>
      <ul>
        {dados.map((item) => (
          <li key={item.locatario}>{item.locatario} {item.data} {item.sala}</li>
        ))}
      </ul>
    </div>
  );
}

export default VerReservas;

  
  
  
  
  