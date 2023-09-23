
//document.getElementById("myBtn").addEventListener("click", myFunction);
//document.getElementById("myBtn2").addEventListener("click", myFunction2);



document.addEventListener('DOMContentLoaded', function(){
  console.log('La pagina ya termina de Cargarse');

  var storedValueWD = localStorage.getItem('DiasTrabajados');
  var storedValueBD = localStorage.getItem('DiasHabiles');
  var storedValueRC = localStorage.getItem('ReleasedCalls');
  var storedValueTC = localStorage.getItem('TotalCalls');


  let ObjWD  = document.getElementById("WD");
  let ObjBD  = document.getElementById("BD");
  let ObjRC  = document.getElementById("RC");
  let ObjTC  = document.getElementById("TC");

  ObjWD.value = storedValueWD;
  ObjBD.value = storedValueBD;
  ObjRC.value = storedValueRC;
  ObjTC.value = storedValueTC;

  getData();
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

document.getElementById("submit").addEventListener("click",getData);
const gaugeElement = document.querySelector(".gauge");

const promValue = document.querySelector(".prom");
const faltaValue = document.querySelector(".falta");
const alDiaValue = document.querySelector(".alDia");
const porcenDia = document.querySelector(".porcentajeDia");

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




ObjdiasTrabajados.addEventListener('change',guardar);
ObjdiasHabiles.addEventListener('change',guardar);
ObjreleasedCalls.addEventListener('change',guardar);
ObjtotalCalls.addEventListener('change',guardar);



function guardar(){
    localStorage.setItem('DiasTrabajados',ObjdiasTrabajados.value);
    localStorage.setItem('DiasHabiles',ObjdiasHabiles.value);
    localStorage.setItem('ReleasedCalls',ObjreleasedCalls.value);
    localStorage.setItem('TotalCalls',ObjtotalCalls.value);

}


function getData(){

    let diasTrabajados = document.getElementById("WD").value;
    let diasHabiles    = document.getElementById("BD").value;
    let releasedCalls  = document.getElementById("RC").value;
    let totalCalls     = document.getElementById("TC").value;

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

    RR              = releasedCalls/totalCalls;
    porcentajeDeuda = (0.7 - RR).toFixed(2);
    deuda           = (totalCalls*porcentajeDeuda);
    promedio        = (totalCalls/diasTrabajados);
    restantesDelMes = promedio * (diasHabiles-diasTrabajados);
    minimoPorColgar = (restantesDelMes*0.7);
    necesitoColgar  = (minimoPorColgar + deuda);
    porcentajeDia   = (necesitoColgar/restantesDelMes)*100;

    cantidadPosible = promedio * (diasHabiles-diasTrabajados);
    alDiaCol        = cantidadPosible/ (diasHabiles-diasTrabajados);
    mi70Pociento    = minimoPorColgar + deuda + 93;
    faltaCol        = minimoPorColgar + deuda;


    setGaugeValue(gaugeElement,RR); 

    promValue.textContent = `${promedio.toFixed(0)}`;

    faltaValue.textContent = `${necesitoColgar.toFixed(0)}`;

    alDiaValue.textContent = `${restantesDelMes.toFixed(0)}`;

    porcenDia.textContent = `${porcentajeDia.toFixed(0)+"%"}`;

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

    
    if(RR < 0.7){
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
 