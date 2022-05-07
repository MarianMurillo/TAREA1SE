import React from "react";
import { useForm } from "react-hook-form";
let jsonData= require('../Data/redes.json');
function ClasificaRed() {
  const {register, handleSubmit , setValue}=useForm();
  const onSubmit = (datos) =>{
    var DistanciaMenor =1000;
    const valores = {
      'Low': 1,
      'Medium' : 2,
      'High' : 3
    }
    let valor ='';
    
    var i=0;
    for(i=0; i<jsonData.length;i++){
      const DConfExcel = jsonData[i]["Reliability (R)"];
      const DConfUser = datos.confRed;

      const DEnlacesExcel = jsonData[i]["Number of links (L)"];
      const DEnlacesUser = datos.enlaces;

      const DCapExcel = valores[jsonData[i]["Capacity (Ca)"]];
      const DcapUser = valores[datos.capacidad];

      const DCoExcel = valores[jsonData[i]["Costo (Co)"]];
      const DCoUser = valores[datos.costo];
      
    
      const  ValorDistancia = Math.sqrt((DConfUser-DConfExcel)^2+(DEnlacesUser-DEnlacesExcel)^2+(DcapUser-DCapExcel)^2+(DCoUser-DCoExcel)^2);
   
      if(ValorDistancia<DistanciaMenor){
          valor = jsonData[i].Class;
          DistanciaMenor=ValorDistancia;
      }
     
    }
    setValue('resultado', valor);


   
  }
  return (
    <div className="page-heading">
      <form onSubmit={handleSubmit(onSubmit)}>
        <center><h1>Clasificación de redes</h1></center>
        <center><label>Seleccione de la red ...</label></center>
        <label>*Confiabilidad :</label>
        <select {...register('confRed')}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
       <label>*Número de enlaces : </label>
        <select {...register('enlaces')}>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <br></br>
        <label>*Capacidad :</label>
        <select {...register('capacidad')}>
          <option value="Low">Baja</option>
          <option value="Medium">Media</option>
          <option value="High">Alta</option>
        </select>
        <br></br>
        <label>*Costo :</label>
        <select {...register('costo')}>
          <option value="Low">Bajo</option>
          <option value="Medium">Medio</option>
          <option value="High">Alto</option>
        </select>
        <br></br>
        <br></br>
        <center><button> Calcular </button></center>
        <br></br>
        <label>Resultado</label>
        <textarea placeholder="Resultado encontrado"  readOnly {...register('resultado')}></textarea>
      </form>
    </div>
  );
}

export default ClasificaRed;