import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ver_reservas.css'


function VerReservas() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    puxar();
  }, []);

  const puxar = async () => {
    axios.get(`http://127.0.0.1:8000/reservas/`)
      .then((response) => {
        console.log(response);
        setDados(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const formatarData = (data) => {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const formatarCpf = (data) => {
    const cpfString = data.toString();

    return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  return (
    <div>
      <h2>Lista de Reservas</h2>
      <ul className="lista-itens">
        {dados.map((item) => (
          <li key={item.locatario}>
            <strong>CPF:</strong> {formatarCpf(item.locatario)} <br />
            <strong>Data:</strong> {formatarData(item.data)} <br />
            <strong>Sala:</strong> {item.sala} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerReservas;
