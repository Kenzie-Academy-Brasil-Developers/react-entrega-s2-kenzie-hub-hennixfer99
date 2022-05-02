import React,{useState, useEffect} from "react";
import "./techlist.css"
import Remover from "../modal2/modal2";

function TechList(item) {

    function add() {
        setSair(true);
      }
      function fechar() {
        setSair(false);
      }
      function teste(){
        setContador("hi")
      }
      const [sair, setSair] = useState(false);
      const [contador, setContador] = useState(0);
      const nome = item.tecnologia.title
      const tecnologiaid = item.tecnologia.id
    
      

  return <>
  
    {sair && <Remover exit={fechar} nome = {nome} id ={tecnologiaid} />} 
    <li onClick={add}>
        <h2>{nome}</h2> <h3>{item.tecnologia.status}</h3> 
    </li>
  
  
  
  </>;
}

export default TechList;
