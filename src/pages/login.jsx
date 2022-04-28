import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Kenziehub from "../images/Kenziehub.svg";
import "./login.css";
import Api from "../Serviços/api";
import { toast } from "react-toastify";

function Login(dados) {
  const remediacao = useHistory();
  function cadastrese() {
    remediacao.push("/cadastre-se");
  }

  const verificacao = yup.object().shape({
    email: yup
      .string()
      .required("Email não existe")
      .email("Email não existe"),
    password: yup
      .string()
      .required("Senha incorreta")
      .matches(
        "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Senha Invalida"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verificacao),
  });


  const handleSubmitFunction = (cadastrado) => {
    const user = {};
    user.email = cadastrado.email;
    user.password = cadastrado.password;
    Api.post("sessions", user).then((response) => {
      toast.success("logado com sucesso =D.")
      console.log(response)
      window.localStorage.setItem( "idzinho",JSON.stringify(response.data.token))
      window.localStorage.setItem( "usuario",JSON.stringify(response.data.user))
      return remediacao.push(`/homepage`)
    }).catch((teste) => {
      toast.error("Alguma coisa deu errado =(, verifique seus dados.")
      
    })
  }
  return (
    <main>
      <div className="quadradinho">
        <navbar>
        <img src={Kenziehub} />
        </navbar>
        <form className="login" onSubmit={handleSubmit(handleSubmitFunction)}>
          <h1>Login</h1>
          <p>E-mail:</p>
          <input placeholder="Digite aqui seu email" {...register("email")} />
          <h3>{errors.email?.message}</h3>
          <p>Senha:</p>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <h3>{errors.password?.message}</h3>
          <button type="submit" className="botaoentrar">
            Entrar
          </button>

          <h3>Ainda não possui uma conta?</h3>
          <button onClick={cadastrese} className="botaocadastrar">
            Cadastre-se
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
