
import { useState } from 'react'
import './pagina_principal.css'
import FazerReserva from '../fazer_reserva/fazer_reserva.js'
import VerReservas from '../ver_reservas/ver_reservas.js'

function  PaginaPrincipal (){

    const [Opcao,setOpcao] = useState()


    return(
        <div class="body">
            <h1>Página Principal</h1>
            <br/>
            <button onClick={()=>{setOpcao(FazerReserva)}}>
                Fazer Reservas
            </button>
            <button onClick={()=>{setOpcao(VerReservas)}}>
                Olhar Reservas
            </button>
            {Opcao}
        </div>
    )

}




export default PaginaPrincipal