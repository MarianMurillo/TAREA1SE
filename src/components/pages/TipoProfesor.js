import React from "react";
import { useForm } from "react-hook-form";
let jsonData= require('../Data/Profesores.json');
function TipoProfesor() {
  const {register, handleSubmit , setValue }=useForm();
  const onSubmit = (datos) =>{
    var DistanciaMenor =1000;
    const valores = {
      'N': 1,
      'S' : 2,
      'O' : 3
    }
    const sexo = {
      'F': 1,
      'M' : 2,
      'NA': 3
    }
    const autoev = {
      'B': 1,
      'I' : 2,
      'A': 3
    }
    const exp = {
      'DM': 1,
      'ND' : 2,
      'O': 3
    }
    const habC = {
      'L': 1,
      'A' : 2,
      'H': 3
    }
    let valor ='';
    var i=0;
    for(i=0; i<jsonData.length;i++){
      const DEdadExcel = jsonData[i].A;
      const DEdadUser = datos.edad;

      const DSexoExcel = sexo[jsonData[i].B];
      const DSexoUser = datos.enlaces;

      const DAutExcel = autoev[jsonData[i].C];
      const DAutUser = autoev[datos.autoevaluacion];

      const DVecExcel = jsonData[i].D;
      const DVecUser = datos.vecesCurso;

      const DExpExcel = exp[jsonData[i].E];
      const DExpUser = datos.experiencia;

      const DHCExcel = habC[jsonData[i].F];
      const DHCUser = datos.habcomputador;

      const DETExcel = valores[jsonData[i].G];
      const DETUser = valores[datos.expWeb];

      const DWSExcel = valores[jsonData[i].H];
      const DWSUser = valores[datos.expWebSite];
    
      const  ValorDistancia = Math.sqrt((DEdadUser-DEdadExcel)^2+(DSexoUser-DSexoExcel)^2+(DAutUser-DAutExcel)^2+(DVecUser-DVecExcel)^2+(DExpUser-DExpExcel)^2+(DHCUser-DHCExcel)^2+(DETUser-DETExcel)^2+(DWSUser-DWSExcel)^2);
   
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
        <center><h1>Tipo de Profesor</h1></center>
        <center><label>Seleccione del profesor ...</label></center>
        <label>*Edad</label>
        <select {...register('edad')}>
          <option value="1">Menor o igual a 30</option>
          <option value="2">Entre 30 y 55</option>
          <option value="3">Mayor a 55</option>
        </select>
        <br></br>
       <label>*Género</label>
        <select {...register('genero')}>
          <option value="F">F</option>
          <option value="M">M</option>
          <option value="NA">NA</option>
        </select>
        <br></br>
        <label>*Autoevaluación</label>
        <select {...register('autoevaluacion')}>
          <option value="B">Principiante</option>
          <option value="I">Intermedio</option>
          <option value="A">Avanzado</option>
        </select>
        <br></br>
        <label>*Veces que ha impartido el curso</label>
        <select {...register('vecesCurso')}>
          <option value="1">Nunca</option>
          <option value="2">1 a 5 veces</option>
          <option value="3">Más de 5 veces</option>
        </select>
        <br></br>
        <label>*Experiencia en : </label>
        <select {...register('experiencia')}>
          <option value="DM">Toma de decisiones</option>
          <option value="ND">Diseño de redes</option>
          <option value="O">Otro</option>
        </select>
        <br></br>
        <label>*Habilidad en computadora : </label>
        <select {...register('habcomputador')}>
          <option value="L">Baja</option>
          <option value="A">Promedio</option>
          <option value="H">Alta</option>
        </select>
        <br></br>
        <label>*Experiencia en tecnología web para enseñar : </label>
        <select {...register('expWeb')}>
          <option value="N">Nunca</option>
          <option value="S">A veces</option>
          <option value="O">A menudo</option>
        </select>
        <br></br>
        <label>*Experiencia usando sitios web: </label>
        <select {...register('expWebSite')}>
          <option value="N">Nunca</option>
          <option value="S">A veces</option>
          <option value="O">A menudo</option>
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

export default TipoProfesor;