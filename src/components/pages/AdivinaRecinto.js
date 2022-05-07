import React from "react";
import { useForm } from "react-hook-form";
import { promedioValidator } from "../validators";

let jsonData= require('../Data/EstiloSexoPromedioRecinto.json');

function AdivinaRecinto() {
  const {register,formState:{ errors }, handleSubmit , setValue}=useForm();
  const onSubmit = (datos) =>{
    
   var DistanciaMenor =1000;
    const opciones = {
      'DIVERGENTE': 1,
      'CONVERGENTE' : 2,
      'ASIMILADOR' : 3,
      'ACOMODADOR' : 4
    }
    const sexo ={
      'F': 1,
      'M' : 2
    }
    let valor ='';
    
    var i=0;
    for(i=0; i<jsonData.length;i++){
      const DPromedioExcel = jsonData[i].Promedio;
      const DPromedioUser = datos.promedio;

      const DSexoExcel = sexo[jsonData[i].Sexo];
      const DSexoUser = sexo[datos.sexo];
     
        
      

      const DEstiloUser = opciones[datos.estilo];
     
      const DEstiloExel = opciones[jsonData[i].Estilo];
      
    
      const  ValorDistancia = Math.sqrt((DPromedioUser-DPromedioExcel)^2+(DSexoUser-DSexoExcel)^2+(DEstiloUser-DEstiloExel)^2);
   
      if(ValorDistancia<DistanciaMenor){
          valor = jsonData[i].Recinto;
          DistanciaMenor=ValorDistancia;
      }
      setValue('resultado', valor);
    }
   
    
     
  }

  return (
    <div className="page-heading">
      <form onSubmit={handleSubmit(onSubmit)}>
        <center><h1>Adivina Recinto</h1></center>
        <label>Promedio</label>
        <input class="form-input" type="text" {...register('promedio',{
          required:true,
          validate: promedioValidator
        })}></input>
        <br></br>
        <br></br>
        {errors.promedio?.type === 'required' && <p>El promedio es requerido</p>}
        {errors.promedio && <p>El promedio debe estar entre 0 y 10</p>}
        <label>Estilo</label>
        <select {...register('estilo')}>
          <option value="DIVERGENTE">Divergente</option>
          <option value="CONVERGENTE">Convergente</option>
          <option value="ASIMILADOR">Asimilador</option>
          <option value="ACOMODADOR">Acomodador</option>
        </select>
        <br></br>
        <br></br>
        <label>Sexo</label>
        <select {...register('sexo')}>
          <option value="F">F</option>
          <option value="M">M</option>
        </select>
        <br></br>
        <br></br>
        <center><button onclick="calcular()"> Calcular </button></center>
        <br></br>
        <br></br>
        <label>Resultado</label>
        <textarea placeholder="Resultado encontrado"  readOnly {...register('resultado')}></textarea>
      </form>
    </div>
  );
}

export default AdivinaRecinto;