import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Kenziehub from "../images/Kenziehub.svg";
import adicionar from "../images/adicionar.svg";
import "./homepage.css";
import Api from "../Serviços/api";
import Modal1 from "../components/modal1/modal1";
import TechList from "../components/listadeTecnologias/techlist";
import Remover from "../components/modal2/modal2";
function Homepage() {
  const remediacao = useHistory();

  function logout() {
    localStorage.clear();
    remediacao.push("/login");
  }
  function add() {
    setSair(true);
  }
  function fechar() {
    setSair(false);
  }
  const [sair, setSair] = useState(false);
  const [user, setUser] = useState({});
  const [tech, setTech] = useState([]);
  const id = JSON.parse(localStorage.getItem("id"));
  const token = JSON.parse(localStorage.getItem("token"));
  
  const tecnologiasListadas = tech.map(((item) => <TechList tecnologia={item} key={item.id} />));
  function adicionarTech() {
    Api.get(`users/${id}`).then((response) => {
    
      setUser(response.data);
      setTech(response.data.techs);
    });
  }
  
  
  
  useEffect(() => {
    adicionarTech();
    
  }, [sair,tech]);

  return (
    <div>
      <div className="bloco1">
        <div className="itens-topo1">
          <img src={Kenziehub} />
          <button className="logout" onClick={logout}>
            Sair
          </button>
        </div>
      </div>
      <header>
        <div className="itens-topo2">
          <h2>Olá,{user.name}</h2> <h3>{user.course_module}</h3>
        </div>
      </header>
      <main>
        <div className="tecnologias">
          <h2>Tecnologias</h2>{" "}
          <button className="add" onClick={add}>
            <img src={adicionar} />
          </button>
        </div>
        
        {sair && <Modal1 exit={fechar} token={token} />}
        <ul>
          {tecnologiasListadas}
        </ul>
      </main>
    </div>
  );
}

export default Homepage;
