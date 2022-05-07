import React from "react";
import { useForm } from "react-hook-form";
let jsonData= require('../Data/RecintoEstilo.json');
function Test() {
  const {register,formState:{ errors }, handleSubmit , setValue }=useForm();
  const onSubmit = (datos) =>{
   var DistanciaMenor =1000;
   let valor ='';
   var i=0;
   var ec = datos.c5 + datos.c9 + datos.c13 + datos.c17 + datos.c25 + datos.c29;
   var or = datos.c2 + datos.c10 + datos.c22 + datos.c26 + datos.c30 + datos.c34;
   var ca = datos.c7 +datos.c11 + datos.c15 + datos.c19 +datos.c31 + datos.c31;
	var ea = datos.c4 + datos.c12 + datos.c24 + datos.c24 + datos.c32 + datos.c36;

	const caec = ca-ec;
   const eaor = ea-or;

    for(i=0; i<jsonData.length;i++){
      

      const DCA = jsonData[i].CA;
      const DEC = jsonData[i].EC;
      const DEA = jsonData[i].EA;
      const DOR = jsonData[i].OR;
      const DCAEC = jsonData[i]["CA-EC"];
      const DEAOR = jsonData[i]["EA-OR"];
      
      const  ValorDistancia = Math.sqrt((ca-DCA)^2+(ec-DEC)^2+(ea-DEA)^2+(or-DOR)^2+(caec-DCAEC)^2+(eaor-DEAOR)^2);
   
      if(ValorDistancia<DistanciaMenor){
          valor = jsonData[i].Estilo;
          DistanciaMenor=ValorDistancia;
      }
     
    }
    setValue('resultado', valor);
    
  }
  return (
    
    <div className="page-heading">
      
      <form onSubmit={handleSubmit(onSubmit)}>
       <label> CUAL ES SU ESTILO DE APRENDIZAJE?</label>
       <p>Instrucciones: <br></br>
       Para utilizar el instrumento usted debe conceder una calificación alta a aquellas palabras que mejor caracterizan la forma en que usted aprende, y una calificación baja a las palabras que menos caracterizan su estilo de aprendizaje.
       <br></br>Le puede ser difícil seleccionar las palabras que mejor describen su estilo de aprendizaje, ya que no hay respuestas correctas o incorrectas.<br></br>Todas las respuestas son buenas, ya que el fin del instrumento es describir cómo y no juzgar su habilidad para aprender.
       <br></br>De inmediato encontrará nueve series o líneas de cuatro palabras cada una. Ordene de mayor a menor cada serie o juego de cuatro palabras que hay en cada línea, ubicando 4 en la palabra que mejor caracteriza su estilo de aprendizaje, un 3 en la palabra siguiente en cuanto a la correspondencia con su estilo; a la siguiente un 2, y un 1 a la palabra que menos caracteriza su estilo. Tenga cuidado de ubicar un número distinto al lado de cada palabra en la misma línea.</p>
       <br></br>
       <label>Yo aprendo...</label>
       <br></br>
       <table  border="1" cellpadding="2" cellspacing="2">
           <tbody>
             <tr>
               <td>
                   <select {...register('c1')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                   discerniendo<br></br>
                </td>
                <td>
                   <select {...register('c2')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                   ensayando<br></br>
                </td>
                <td>
                   <select {...register('c3')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                   involucrándome<br></br>
                </td>
                <td>
                   <select {...register('c4')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                   practicando<br></br>
                </td>

              </tr>
              <tr>
               <td>
                   <select {...register('c5')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    receptivamente<br></br>
                </td>
                <td>
                   <select {...register('c6')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    relacionando<br></br>
                </td>
                <td>
                   <select {...register('c7')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    analíticamente<br></br>
                </td>
                <td>
                   <select {...register('c8')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    imparcialmente<br></br>
                </td>

              </tr>
              <tr>
               <td>
                   <select {...register('c9')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    sintiendo<br></br>
                </td>
                <td>
                   <select {...register('c10')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    observando<br></br>
                </td>
                <td>
                   <select {...register('c11')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    pensando<br></br>
                </td>
                <td>
                   <select {...register('c12')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    haciendo<br></br>
                </td>

              </tr>
              <tr>
               <td>
                   <select {...register('c13')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    aceptando<br></br>
                </td>
                <td>
                   <select {...register('c14')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    arriesgando<br></br>
                </td>
                <td>
                   <select {...register('c15')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    evaluando<br></br>
                </td>
                <td>
                   <select {...register('c16')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    con cautela<br></br>
                </td>

              </tr>
              <tr>
               <td>
                   <select {...register('c17')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    intuitivamente<br></br>
                </td>
                <td>
                   <select {...register('c18')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    productivamente<br></br>
                </td>
                <td>
                   <select {...register('c19')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    lógicamente<br></br>
                </td>
                <td>
                   <select {...register('c20')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    cuestionando<br></br>
                </td>

              </tr>
              <tr>
               <td>
                   <select {...register('c21')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    abstracto<br></br>
                </td>
                <td>
                   <select {...register('c22')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    observando<br></br>
                </td>
                <td>
                   <select {...register('c23')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    concreto<br></br>
                </td>
                <td>
                   <select {...register('c24')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    activo<br></br>
                </td>

              </tr>
              
              <tr>
               <td>
                   <select {...register('c25')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    orientado al presente<br></br>
                </td>
                <td>
                   <select {...register('c26')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    reflexivamente<br></br>
                </td>
                <td>
                   <select {...register('c27')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    orientado hacia el futuro<br></br>
                </td>
                <td>
                   <select {...register('c28')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    pragmático<br></br>
                </td>

              </tr>
              <tr>
               <td>
                   <select {...register('c29')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    aprendo más de la experiencia<br></br>
                </td>
                <td>
                   <select {...register('c30')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    aprendo más de la observación<br></br>
                </td>
                <td>
                   <select {...register('c31')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    aprendo más de la conceptualización<br></br>
                </td>
                <td>
                   <select {...register('c32')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    aprendo más de la experimentación<br></br>
                </td>

              </tr>
              <tr>
               <td>
                   <select {...register('c33')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    emotivo<br></br>
                </td>
                <td>
                   <select {...register('c34')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    reservado<br></br>
                </td>
                <td>
                   <select {...register('c35')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    racional<br></br>
                </td>
                <td>
                   <select {...register('c36')}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    abierto<br></br>
                </td>

              </tr>
        
            </tbody>
         </table>
          <br></br>
          <button > Calcular </button>
          ESTILO&nbsp;&nbsp;  <label>Estudiante Estilo: </label><textarea placeholder="Resultado encontrado"  readOnly {...register('resultado')}></textarea>
       </form>
      
         <br></br>
    </div>
  );
}

export default Test;