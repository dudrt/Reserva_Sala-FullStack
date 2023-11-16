

import PaginaPrincipal from './../pagina_principal/pagina_principal'
import Login from './../pagina_login/login';
import VerReservas from '../ver_reservas/ver_reservas';
import FazerReserva from '../fazer_reserva/fazer_reserva';
import { useMyContext } from '../user_info/user_info';

function RotaInicial(){
    const { EstadoLogin } = useMyContext();

return(
    <div>
    {EstadoLogin ? (
        <PaginaPrincipal />
      ):(
        <Login />
      )}
</div>
)

}export default RotaInicial