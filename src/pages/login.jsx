import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function Login(dados) {
    
    const remediacao = useHistory()
  function cadastrese(){

    remediacao.push("/cadastre-se")
    
}
  
  
    return (
    <>
      <form>
        <h1>Login</h1>
        <p>E-mail:</p>
        <input placeholder="Digite aqui seu email" {...dados.email === ("email")} />
        {/* <h3>{errors.email?.message}</h3> */}
        <p>Senha:</p>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...dados.password === ("password")}
        />
        {/* <h3>{errors.password?.message}</h3> */}
        <button type="submit">Entrar</button>

        <div>
            <h3>Ainda não possui uma conta?</h3>
            <button onClick={cadastrese}>Cadastre-se</button>
        </div>

      </form>
    </>
  );
}

export default Login