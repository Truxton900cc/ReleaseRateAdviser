
//document.getElementById("myBtn").addEventListener("click", myFunction);
//document.getElementById("myBtn2").addEventListener("click", myFunction2);



document.addEventListener('DOMContentLoaded', function(){
  console.log('La pagina ya termina de Cargarse');

  var storedValueWD = localStorage.getItem('DiasTrabajados');
  var storedValueBD = localStorage.getItem('DiasHabiles');
  var storedValueRC = localStorage.getItem('ReleasedCalls');
  var storedValueTC = localStorage.getItem('TotalCalls');
  var storedValueRR = localStorage.getItem('ReleasedRateGoal');

  let ObjWD  = document.getElementById("WD");
  let ObjBD  = document.getElementById("BD");
  let ObjRC  = document.getElementById("RC");
  let ObjTC  = document.getElementById("TC");
  let ObjRR  = document.getElementById("GOAL");

  ObjWD.value = storedValueWD;
  ObjBD.value = storedValueBD;
  ObjRC.value = storedValueRC;
  ObjTC.value = storedValueTC;
  ObjRR.value = storedValueRR;

  getData();
});

document.addEventListener('DOMContentLoaded', function(){

  const fecha = new Date();

  var year = fecha.getFullYear();
  var month = fecha.getMonth()+1;
  var day = 1;

  console.log("Hoy es:"+fecha);

  //console.log("Esto es lo que se produjo en la clase dateScript: "+localStorage.getItem("conteoDias"));

  let cantDias = localStorage.getItem("conteoDias");
  cantDias++;

  var conteoDiasHabiles = 0;
  var conteoDiasTrabajados = 0;

  for(i=1;i<=9;i++){

    var nuevaFecha = new Date(year.toString()+"-"+month.toString()+"-"+i.toString());
    console.log(nuevaFecha);

    if(nuevaFecha.getDay()>0 && nuevaFecha.getDay()<6)
    {
      conteoDiasHabiles++;
    }
   
  }
  for(i=10;i<=cantDias;i++){

    var nuevaFecha = new Date(year.toString()+"-"+month.toString()+"-"+i.toString());
    console.log(nuevaFecha);

    if(nuevaFecha.getDay()>0 && nuevaFecha.getDay()<6)
    {
      conteoDiasHabiles++;
    }

  }


  //console.log(nuevaFecha.getDate() == fecha.getDate());

  /*while(nuevaFecha.getDate() != fecha.getDate()){
    
    conteoDiasTrabajados++;
    
  }*/

  while(nuevaFecha.getDate() !== fecha.getDate()){
    var nuevaFecha = new Date(year.toString()+"-"+month.toString()+"-"+day.toString());
    day++;
    if(nuevaFecha.getDay()>0 && nuevaFecha.getDay()<6){
      conteoDiasTrabajados++;
    }
    
  }


  console.log("dias habiles: "+conteoDiasHabiles);
  console.log("Dias Trabajados:"+conteoDiasTrabajados);


  //localStorage.setItem('DiasHabiles',conteoDiasHabiles.value);

  let inputDiasHabiles = document.getElementById("BD");
  let inputDiasTrabajados = document.getElementById("WD");

  function cambiarDato(){
    inputDiasHabiles.value = conteoDiasHabiles;
    inputDiasTrabajados.value = conteoDiasTrabajados;
  }
  
  cambiarDato();

});


/*document.addEventListener('DOMContentLoaded', function(){

const xValues = [];
const yValues = [];
generateData("x * 0.053 + 53.03", 240, 370, 19);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 9,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Grafico Del Mes",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
  }
}

});*/

//document.getElementById("submit").addEventListener("click",getData);
const gaugeElement = document.querySelector(".gauge");

const promValue = document.querySelector(".prom");
const faltaValue = document.querySelector(".falta");
const alDiaValue = document.querySelector(".alDia");
const porcenDia = document.querySelector(".porcentajeDia");
const Sobrantes = document.querySelector(".dejarDeColgar");
const Metrica   = document.querySelector(".paraMetrica");

//var i = 0;
//?function myFunction() {
    /*alert ("Hello World!");*/
   // if(i<10){
   // setGaugeValue(gaugeElement, (++i)*0.1);
   // }
    
//}

//function myFunction2() {
    /*alert ("Hello World!");*/

   // if(i>0){
   //     setGaugeValue(gaugeElement, (--i)*0.1);
   // }
    
//}

let ObjdiasTrabajados = document.getElementById("WD");
let ObjdiasHabiles    = document.getElementById("BD");
let ObjreleasedCalls  = document.getElementById("RC");
let ObjtotalCalls     = document.getElementById("TC");
let ObjreleaseInput   = document.getElementById("GOAL");

let ObjIndicador      = document.getElementById("TrianguloId");
var valorIndicador    = ObjIndicador.value;

ObjdiasTrabajados.addEventListener('change',guardar);
ObjdiasHabiles.addEventListener('change',guardar);
ObjreleasedCalls.addEventListener('change',guardar);
ObjtotalCalls.addEventListener('change',guardar);
ObjreleaseInput.addEventListener('change',guardar);
//ObjreleaseInput.addEventListener('change',moverElemento(valorIndicador));

function guardar(){
    localStorage.setItem('DiasTrabajados',ObjdiasTrabajados.value);
    localStorage.setItem('DiasHabiles',ObjdiasHabiles.value);
    localStorage.setItem('ReleasedCalls',ObjreleasedCalls.value);
    localStorage.setItem('TotalCalls',ObjtotalCalls.value);
    localStorage.setItem('ReleasedRateGoal',ObjreleaseInput.value);
    getData();

}


function getData(){

    let diasTrabajados = document.getElementById("WD").value;
    let diasHabiles    = document.getElementById("BD").value;
    let releasedCalls  = document.getElementById("RC").value;
    let totalCalls     = document.getElementById("TC").value;
    var storedValueRR = localStorage.getItem('ReleasedRateGoal');

    //moverElemento(storedValueRR);

    let colorFill      = document.getElementById(`gaugeFillId`);

    var promedio         = 0;
    var cantidadPosible  = 0;
    var alDiaCol         = 0;
    var RR               = 0;
    var porcentajeDeuda  = 0;
    var deuda            = 0;
    var minimoPorColgar  = 0;
    var restantesDelMes  = 0;
    var necesitoColgar   = 0;
    var porcentajeDia    = 0;
    var llamadasDeSobra  = 0;
    var faltaParaMetrica = 0;

    RR              = releasedCalls/totalCalls;
    porcentajeDeuda = ((storedValueRR/100) - RR).toFixed(2);
    deuda           = (totalCalls*porcentajeDeuda);
    promedio        = (totalCalls/diasTrabajados);
    restantesDelMes = promedio * (diasHabiles-diasTrabajados);
    minimoPorColgar = (restantesDelMes*(storedValueRR/100));
    necesitoColgar  = (minimoPorColgar + deuda);
    porcentajeDia   = (necesitoColgar/restantesDelMes)*100;

    cantidadPosible = promedio * (diasHabiles-diasTrabajados);
    alDiaCol        = cantidadPosible/ (diasHabiles-diasTrabajados);
    mi70Pociento    = minimoPorColgar + deuda + 93;
    faltaCol        = minimoPorColgar + deuda;


    //llamadasDeSobra = Math.floor( releasedCalls - (totalCalls * 0.7));
    //llamadasDeSobra = Math.trunc( releasedCalls - (totalCalls * (storedValueRR/100)));

    //console.log("antes de la operacion: "+(releasedCalls - (totalCalls * (storedValueRR/100))));

    //console.log("Operacion "+ (releasedCalls > (totalCalls*(storedValueRR/100))));

    if(releasedCalls > (totalCalls*(storedValueRR/100))){
      
      let totalDeLlamadas = totalCalls;
      let totalColgada = releasedCalls;
      let OtromiRR = totalCalls*(storedValueRR/100);

      while(totalColgada > OtromiRR){

        totalDeLlamadas++;

        OtromiRR = totalDeLlamadas*(storedValueRR/100);

        llamadasDeSobra++;

      }
      llamadasDeSobra--;
    }
    else{
      
      llamadasDeSobra = 0;
      

    }

    

    console.log("Llamadas de Sobra: "+llamadasDeSobra);

    let colgadas = releasedCalls;
    let totales  = totalCalls;
    let mirr = RR;
    
    if(RR >= storedValueRR/100){
      faltaParaMetrica = 0;
    }
    else{

      while(storedValueRR > mirr){
  
      colgadas++;

      totales++; 
      
      mirr = (colgadas/totales)*100;
    
      faltaParaMetrica++;
      
      }
    }
    

  

    setGaugeValue(gaugeElement,RR); 

    promValue.textContent = `${promedio.toFixed(0)}`;

    if(necesitoColgar>0){
      faltaValue.textContent = `${necesitoColgar.toFixed(0)}`;
    }
    else{
      faltaValue.textContent = `0`;
    }

    alDiaValue.textContent = `${restantesDelMes.toFixed(0)}`;

    if(porcentajeDia>0 && porcentajeDia<100.1)
    {
      porcenDia.textContent = `${porcentajeDia.toFixed(0)+"%"}`;
    }
    else{
      porcenDia.textContent = `70%`;
    }
      

    if(llamadasDeSobra>0){
        Sobrantes.textContent = `${llamadasDeSobra.toFixed(0)}`;
    }
    else{
        Sobrantes.textContent = `${0}`;
    }
    
    Metrica.textContent = `${faltaParaMetrica.toFixed(0)}`;

    console.log("Release Rate: "     +RR);
    console.log("Porcentaje Deuda: " +porcentajeDeuda);
    console.log("Deuda llamadas: "   +deuda);
    console.log("Total de LLamadas"  +totalCalls);
    console.log("Promedio al dia:"   +promedio);
    console.log("Restantes del Mes: "+restantesDelMes);
    console.log("Minimo por colgar: "+minimoPorColgar);
    console.log("Necesita Colgar: "  +necesitoColgar);
    

    var storedValue = localStorage.getItem('DiasHabiles');

    console.log("El valor que se guardo es :"+storedValue);

    const site = window.location.hostname;
    console.log(site);

    
    if(RR < storedValueRR/100){
      colorFill.style.animation = "cambiarColorBien 1s 1 forwards"
    }
    else{
      colorFill.style.animation = "cambiarColorMal 1s 1 forwards"
    }
    
    

}

function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }
  
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${
      (value * 100).toFixed(2)
    }%`;
  }

function contarAlColgar(){

  var storedValueTC = localStorage.getItem('TotalCalls');

  

}

var circulo = document.getElementById("circulo");

var centroX = circulo.offsetLeft + circulo.offsetWidth / 2;
var centroY = circulo.offsetTop + circulo.offsetHeight / 2;

var radio = circulo.offsetWidth / 2;

var angulo = 180;

function moverElemento(valorAngulo){
  

  angulo = (valorAngulo/0.56)+180;

  var posX = centroX + radio * Math.cos(angulo * Math.PI / 180);
  var posY = centroY + radio * Math.sin(angulo * Math.PI / 180);

  ObjIndicador.style.left = posX - ObjIndicador.offsetWidth / 2 + "px";
  ObjIndicador.style.top  = posY - ObjIndicador.offsetHeight / 2 + "px";
  

  //angulo += 1;

  
  /*if(angulo > 360){
    angulo = 180;
  }*/
 
  //requestAnimationFrame(moverElemento);
}
moverElemento(0.8);
