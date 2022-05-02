import React from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Serviços/api";
import "./modal1.css" 

function Modal1({exit, token}){
    

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

      const handleSubmitFunction = (cadastrado) => {
        Api.post("users/techs", cadastrado,{headers:{Authorization: `Bearer ${token}`}}).then((e) =>{
            
        toast.success("Tecnologia Cadastrada =D")
        exit()    

        }).catch((teste) => {
            toast.error("Tente Cadastrar uma nova Tecnologia")
            
          }) 

      };
      
    return( 
        <>
        <div className="modalinteiro">
        <div className="modal1-cima">
        <h2>Cadastrar Tecnologia</h2> <button className="exitmodal" onClick={exit}>X</button>
        </div>
        <form className="modal1" onSubmit={handleSubmit(handleSubmitFunction)}>
            <h3>
                Nome
            </h3>
            <input placeholder="Digite aqui seu nome" {...register("title")} />
            <h3>{errors.name?.message}</h3>

            <h3>
                Selecionar status
            </h3>
            <select {...register("status")}>
                <option value="Iniciante"> Iniciante</option>
                <option value="Intermediário"> Intermediário</option>
                <option value="Avançado"> Avançado</option>
            </select>
            <button type="submit" className="buttontech">Cadastrar Tecnologia</button>
        </form>

        </div>
        </>
    )

}
export default Modal1