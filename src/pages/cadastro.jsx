import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./cadastro.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Kenziehub from "../images/Kenziehub.svg";
import Api from "../Serviços/api";
import { toast } from "react-toastify";

function Cadastro() {
  const logado = useHistory();
  function voltar() {
    logado.push("/login");
  }
  const confirmacoes = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .required("E-mail é obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .matches(
        "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Senha Invalida"
      ),
    confirmpassword: yup
      .string()
      .required("Senhas estão diferentes")
      .oneOf([yup.ref("password"), null], "Senhas estão diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(confirmacoes),
  });
  
  const bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  
  const handleSubmitFunction = (cadastrado) => {
    const user = {};
    user.name = cadastrado.name;
    user.email = cadastrado.email;
    user.password = cadastrado.password;
    user.bio = bio;
    user.course_module = cadastrado.course_module;
    user.contact = `https://www.linkedin.com/in/${cadastrado.name}/`;
    
    Api.post("users", user).then((response) => {
      console.log(response)
      toast.success("Cadastrado com sucesso =D.")
      return logado.push(`/Login`).reload();
    }).catch((teste) => {
      toast.error("Alguma coisa deu errado =(, verifique seus dados.")
      
    })
  };
  return (
    <>
      <header>
        <img src={Kenziehub} />
        <button className="voltar" onClick={voltar}>
          voltar
        </button>
      </header>
      <main>
        <form
          className="cadastro"
          onSubmit={handleSubmit(handleSubmitFunction)}
        >
          <h1>Crie sua conta</h1>
          <h4>Rápido e grátis, vamos nessa</h4>
          <p>Nome:</p>
          <input placeholder="Digite aqui seu nome" {...register("name")} />
          <h3>{errors.name?.message}</h3>
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
          <p>Confirmar Senha:</p>
          <input
            type="password"
            placeholder="Digite novamente sua Senha"
            {...register("confirmpassword")}
          />
          <h3>{errors.confirmpassword?.message}</h3>
          <p>Selecionar módulo:</p>
          <select {...register("course_module")}>
            <option value={"Primeiro Módulo"}>Primeiro Módulo</option>
            <option value={"Segundo Módulo"}>Segundo Módulo</option>
            <option value={"Terceiro Módulo"}>Terceiro Módulo</option>
            <option value={"Quarto Módulo"}>Quarto Módulo</option>
          </select>
          <button className="botaocadastro" type="submit">
            Cadastrar
          </button>
          <h4>
            Obs: Senha com no mínimo 8 caracteres. Necessário ter letras,
            números e ao menos um símbolo.
          </h4>
        </form>
      </main>
    </>
  );
}

export default Cadastro;
