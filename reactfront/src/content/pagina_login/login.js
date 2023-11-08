import { useState } from "react"
import axios from 'axios'


function Login() {










    
    const [state, setState] = useState()
    const [login, setLogin] = useState(true)

    const LoginFunc = async () => {
        let email = document.getElementById("email").value
        let senha = document.getElementById("senha").value

    }
    const CepFunc = async () =>{

        let cep = document.getElementById("cep").value

        if(cep.length===8){
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                CepTratarDados(response.data);
            });
        }
    }

    const CepTratarDados = async (dados) =>{
        console.log(dados)

        document.getElementById("estado").value = dados.uf
        document.getElementById("cidade").value = dados.localidade
        document.getElementById("rua").value = dados.logradouro

    }

    const Cadastrar = async ()  => {
        let nome = document.getElementById("nome").value
        let cpf = document.getElementById("cpf").value
        let email = document.getElementById("email").value
        let senha1 = document.getElementById("senha1").value
        let senha2 = document.getElementById("senha2").value
        let cep = document.getElementById("cep").value
        let estado = document.getElementById("estado").value
        let cidade = document.getElementById("cidade").value
        let rua = document.getElementById("rua").value
        let nm_casa = document.getElementById("nm_casa").value


        console.log( cpf,
           nome,
            email,
            senha1,
            cep,
            estado,
            cidade,
            rua,
             nm_casa)



        try{
            axios.post('http://127.0.0.1:8000/cadastropessoa/', {
            cpf:cpf,
            nome_comp : nome,
            email : email,
            senha : senha1,
            endereco_cep : cep,
            estado : estado,
            cidade : cidade,
            nome_rua : rua,
            nm_casa : nm_casa



          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          });
        }catch(erro){
            console.log(erro)
        }

    }

    const VerificarSenha = () =>{
        let senha1 = document.getElementById("senha1").value
        let senha2 = document.getElementById("senha2").value

        if(senha1!==senha2){
            document.getElementById("senha_info").innerHTML="<label style='color:red'>As senhas não coincidem.</label>"
        }else{
            document.getElementById("senha_info").innerHTML=""
        }

    }


    return (
        <div>
            {login ? (
                <div>
                    <input placeholder="Digite seu email" id="email"></input>
                    <input placeholder="Digite sua senha" id="senha"></input>
                    <button onClick={() =>LoginFunc}>Fazer Login</button><br/>
                    <button onClick={() =>setLogin(false)}>Fazer Cadastro</button>
                </div>
            ) : (
            <div className='div_cadastro'>
                <h3>Tela de Cadastro</h3>
                <input placeholder="CPF" id="cpf"></input>
                <input placeholder="Nome Completo" id="nome"></input>
                <input placeholder="Email" id="email"></input>
                <input placeholder="Sua senha" id="senha1" onKeyUp={VerificarSenha}></input>
                <input placeholder="Confirme sua senha"id="senha2" onKeyUp={VerificarSenha}></input>
                <div id="senha_info"></div>
                <input placeholder="CEP" id="cep" onKeyUp={CepFunc}></input>
                <input placeholder="Estado" id="estado"></input>
                <input placeholder="Cidade" id="cidade"></input>
                <input placeholder="Rua" id="rua"></input>
                <input placeholder="Número da Casa" id="nm_casa"></input>
                <br/>
                <button onClick={()=>Cadastrar()}>
                    Cadastrar
                </button>
            </div>
        )}
        </div>

    )

} export default Login