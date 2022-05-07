import React from "react";
import { useForm } from "react-hook-form";
import { promedioValidator } from "../validators";
let jsonData= require('../Data/EstiloSexoPromedioRecinto.json');
function AdivinaSexo() {
  const {register,formState:{ errors }, handleSubmit , setValue }=useForm();
  const onSubmit = (datos) =>{
    var DistanciaMenor =1000;
    const opciones = {
      'DIVERGENTE': 1,
      'CONVERGENTE' : 2,
      'ASIMILADOR' : 3,
      'ACOMODADOR' : 4
    }
    const recinto = {
      'Paraíso': 1,
      'Turrialba' : 2
    }
    let valor ='';
    var i=0;
    for(i=0; i<jsonData.length;i++){
      const DEstiloUser = opciones[datos.estilo];
      const DEstiloExel = opciones[jsonData[i].Estilo];

      const DPromedioExcel = jsonData[i].Promedio;
      const DPromedioUser = datos.promedio;

      const DRecintoExcel = recinto[jsonData[i].Recinto];
      const DRecintoUser = recinto[datos.recinto];
     
        
    
      const  ValorDistancia = Math.sqrt((DPromedioUser-DPromedioExcel)^2+(DRecintoUser-DRecintoExcel)^2+(DEstiloUser-DEstiloExel)^2);
   
      if(ValorDistancia<DistanciaMenor){
          valor = jsonData[i].Sexo;
          DistanciaMenor=ValorDistancia;
      }
    }
      setValue('resultado', valor);

  }
  return (
    <div className="page-heading">
      <form onSubmit={handleSubmit(onSubmit)}>
        <center><h1>Adivina Sexo</h1></center>
        <label>Estilo</label>
        <select {...register('estilo')}>
          <option value="DIVERGENTE">Divergente</option>
          <option value="CONVERGENTE">Convergente</option>
          <option value="ASIMILADOR">Asimilador</option>
          <option value="ACOMODADOR">Acomodador</option>
        </select>
        <br></br>
        <br></br>
        <label>Promedio</label>
        <input class="form-input" type="text" {...register('promedio',{
          required:true,
          validate: promedioValidator
        })}></input>
        <br></br>
        <br></br>
        {errors.promedio?.type === 'required' && <p>El promedio es requerido</p>}
        {errors.promedio && <p>El promedio debe estar entre 0 y 10</p>}
        
        <label>Recinto</label>
        <select {...register('recinto')}>
          <option value="Paraíso">Paraíso</option>
          <option value="Turrialba">Turrialba</option>
        </select>
        <br></br>
        <br></br>
        <center><button> Calcular </button></center>
        <br></br>
        <br></br>
        <label>Resultado</label>
        <textarea placeholder="Resultado encontrado"  readOnly {...register('resultado')}></textarea>
      </form>
    </div>
  );
}

export default AdivinaSexo;