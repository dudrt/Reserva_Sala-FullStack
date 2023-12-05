import React, { useState, useEffect } from 'react';
import axios from 'axios'

function FazerReserva(){

        const [salas, setSalas] = useState([]);
        const [selecionado, setSelecionado] = useState('');
      
        useEffect(() => {
          const puxar = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:8000/salas/');
              setSalas(response.data);
            } catch (error) {
              console.error('Erro ao carregar salas:', error);
            }
          };
          puxar();
        }, []);
        
    const Cadastrar = async ()  => {
        let sala = document.getElementById("sala").value
        let data = document.getElementById("data").value
        let locatario = document.getElementById("locatario").value

console.log(document.getElementById("sala").value)
        try{
            axios.post('http://127.0.0.1:8000/reservas/', {
            sala : sala,
            data : data,
            locatario: locatario
          })
          .then(function (response) {
         console.log('foi', response)
          })
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div className="main">
            <div className='div_cadastro'>
                <h3>Tela de Cadastro de Reserva</h3>
                <label>Selecione uma sala:</label>
                <select
                    name="sala"
                    id="sala"
                    value={selecionado}
                    onChange={(e) => setSelecionado(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    {salas.map((sala) => (
                    <option key={sala.nome} value={sala.nome}>
                        {sala.nome}
                    </option>
                    ))}
                </select>
                <input placeholder="data" id="data"/>
                <input placeholder="locatario" type="number" id="locatario"/>
                
                <button onClick={()=>Cadastrar()}>
                    Cadastrar
                </button>
            </div>
        </div>
    )


}export default FazerReserva