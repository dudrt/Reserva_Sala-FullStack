import { useState } from "react"
import axios from 'axios'
import olho_invisivel from '../imagens/olho_invisivel.png'
import olho_visivel from '../imagens/olho_visivel.png'
import { useMyContext } from "../user_info/user_info"
import './login.css'


function Login() {
    const { setEstadoLogin } = useMyContext();
    const [login, setLogin] = useState(true)

    const LoginFunc = async () => {
        let email = document.getElementById("email").value
        let senha = document.getElementById("senha").value
        
        axios.get(`http://127.0.0.1:8000/cadastropessoa/`)
        .then((response) => {
            for(let i=0;i<response.lenght;i++){
                if(response[i].email===email){
                    if(response[i].senha===senha){
                        
                        setEstadoLogin(true)

                    }else{
                        document.getElementById("cadastrado").innerHTML="<label style='color:red'>Informações incorretas!</label>"
                    }
                }else{
                    document.getElementById("cadastrado").innerHTML="<label style='color:red'>Informações incorretas!</label>"

                }
            }
        }).catch(function(error){
            if(error.request.status===0){
                document.getElementById("cadastrado").innerHTML="<label style='color:red','font-size:5'>Servidor Offline.</label>"
            }
        })
        




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


        if(senha1!==senha2){
            document.getElementById("cadastro_info").innerHTML="<label style='color:red'>As senhas não coincidem!</label>"
            return
        }else if(senha1 === ""){
            document.getElementById("cadastro_info").innerHTML="<label style='color:red'>Você precisa de uma senha!</label>"
            return
        }
        else if(nome === "" || cpf.lenght<11 || email ==="" || cep === "" || estado==="" || cidade==="" || rua==="" || nm_casa===""){
            document.getElementById("cadastro_info").innerHTML="<label style='color:red'>Preencha todos os campos!</label>"
            return
        }

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
            if(response.status===200){
                setLogin(true)
                document.getElementById("cadastrado").innerHTML="<label>Cadastro realizado com sucesso!</label>"
            }else{
                document.getElementById("cadastro_info").innerHTML="<label style='color:red'>Erro ao cadastrar, entre em contato com o suporte.</label>"
            }
          })
          .catch(function (error) {
            if(error.request.status===0){
                document.getElementById("cadastro_info").innerHTML="<label style='color:red','font-size:5'>Servidor Offline.</label>"

            }else{
                console.log(error)
            }
          });
        }catch(erro){
            console.log("erro no catch do try",erro)
        }

    }

    const VerificarSenha = async () =>{
        let senha1 = document.getElementById("senha1").value
        let senha2 = document.getElementById("senha2").value

        if(senha1!==senha2){
            document.getElementById("senha_info").innerHTML="<label style='color:red'>As senhas não coincidem.</label>"
        }else{
            document.getElementById("senha_info").innerHTML=""
        }

    }


    return (
        <div className="main">
            {login ? (
                <div className='div_login'>
                    <h3>Tela Login</h3>
                    <div id="cadastrado"></div>
                    <input placeholder="Digite seu email" id="email"></input>
                    <input placeholder="Digite sua senha" id="senha"></input>
                    <button onClick={() =>LoginFunc}>Fazer Login</button><br/>
                    <button onClick={() =>setLogin(false)}>Fazer Cadastro</button>
                </div>
            ) : (
            <div className='div_cadastro'>
                <h3>Tela de Cadastro</h3>
                <input placeholder="CPF" maxLength={11} id="cpf"></input>
                <input placeholder="Nome Completo" id="nome"></input>
                <input placeholder="Email" type="email" id="email"></input>
                <div className="div_senha">
                    <input placeholder="Sua senha" id="senha1" type="password" onKeyUp={VerificarSenha}></input>
                    <img width={15} id="img1" className="img" src={olho_invisivel} onClick={()=>{
                        if(document.getElementById("img1").src===olho_invisivel){
                            document.getElementById("senha1").type="text"
                            document.getElementById("img1").src=olho_visivel
                        }else{
                            document.getElementById("img1").src=olho_invisivel
                            document.getElementById("senha1").type="password"

                        }
                    }}></img>
                </div>
                <div className="div_senha">
                    <input placeholder="Confirme sua senha"id="senha2" type="password" onKeyUp={VerificarSenha}></input>
                    <img width={15} id="img2" className="img" src={olho_invisivel} onClick={()=>{
                        if(document.getElementById("img2").src===olho_invisivel){
                            document.getElementById("senha2").type="text"
                            document.getElementById("img2").src=olho_visivel
                        }else{
                            document.getElementById("img2").src=olho_invisivel
                            document.getElementById("senha2").type="password"

                        }
                    }} ></img>
                </div>
                <div id="senha_info"></div>
                <input placeholder="CEP" id="cep" onKeyUp={CepFunc}></input>
                <input placeholder="Estado" id="estado"></input>
                <input placeholder="Cidade" id="cidade"></input>
                <input placeholder="Rua" id="rua"></input>
                <input placeholder="Número da Casa" id="nm_casa"></input>
                
                <div id="cadastro_info"></div>
                <button onClick={()=>Cadastrar()}>
                    Cadastrar
                </button>
                
                <button onClick={() =>setLogin(true)}>
                    Voltar ao Login
                </button>
            </div>
        )}
        </div>

    )

} export default Login