import React,{useEffect} from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Serviços/api";
import "./modal2.css" 
import "../modal1/modal1.css"

function Remover({nome, exit, id}){
    

    const mudanças = yup.object().shape({
    name: yup.string(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(mudanças),
      });
      const token = JSON.parse(localStorage.getItem("token"));
     
      function Excluir(){

        Api.delete(`users/techs/${id}`,{headers:{Authorization: `Bearer ${token}`}}).then((sucesso) =>{
            toast.success("Tecnologia Removida")
            return exit()   
            
            }).catch((teste) => {
                toast.error("Algo deu errado :(")
                
              }) 


    }


      const handleSubmitFunction = (cadastrado) => {
        
        Api.put(`users/techs/${id}`, cadastrado,{headers:{Authorization: `Bearer ${token}`}}).then((sucesso) =>{
        toast.success("Tecnologia modificada")
        exit()     

        }).catch((teste) => {
            toast.error("Algo deu errado :(")
            
          }) 

      };

      
      
    return( 
        <>
        <div className="modalinteiro">
        <div className="modal1-cima">
        <h2>Tecnologia Detalhes</h2> <button className="exitmodal" onClick={exit}>X</button>
        </div>
        <form className="modal1" onSubmit={handleSubmit(handleSubmitFunction)}>
            <h3>
                Nome do projeto
            </h3>
            <h2>{nome}</h2>
            <h3>{errors.name?.message}</h3>

            <h3>
                Status
            </h3>
            <select {...register("status")}>
                <option value="Iniciante"> Iniciante</option>
                <option value="Intermediário"> Intermediário</option>
                <option value="Avançado"> Avançado</option>
            </select>
            <div className="botoes">
            <button type="submit" className="buttonSalvar">Salvar alterações</button>
            <button className="buttonExcluir" onClick={Excluir}>Excluir</button>
            </div>
        </form>

        </div>
        </>
    )

}

export default Remover