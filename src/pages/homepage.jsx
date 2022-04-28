import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Kenziehub from "../images/Kenziehub.svg";
import adicionar from "../images/adicionar.svg"
import "./homepage.css";
import Api from "../Serviços/api";
import { toast } from "react-toastify";


function Homepage(){
const remediacao = useHistory();
const json = (window.localStorage.getItem("usuario"))
const dados = JSON.parse(json);

    function logout(){
        remediacao.push("/login")
    }
    function add(){

    }
    const userlogado = dados.name
    const modulo = dados.course_module
    
    // const tecnologias = 

    return (
        <div>
        <navbar>
        <div className="navbar">
        <img src={Kenziehub} />
        <button className="logout" onClick={logout}>
          Sair
        </button>
        </div>
      </navbar>
      <header>
        <div className="header">
          <h2>Olá,{userlogado}</h2> <h3>{modulo}</h3>
          </div>
      </header>
      <main>
        <div className="tecnologias">
        <h2>Tecnologias</h2> <button className="add" onClick={add} ><img src ={adicionar}/></button>
        </div>
        <ul>
            {}
        </ul>
      </main>
        </div>
    )
}

export default Homepage