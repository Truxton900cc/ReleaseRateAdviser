var switchBoton1 = document.getElementById('btn-switch');
const resumenCuadro   = document.getElementById(`resumen`);
const primeraSeccion  = document.getElementById(`primerSeccionDatos`);
const primeraSeccion1 = document.getElementById(`primerSeccionDatos1`);
const primeraSeccion2 = document.getElementById(`primerSeccionDatos2`);
const primeraSeccion3 = document.getElementById(`primerSeccionDatos3`);
const primeraSeccion4 = document.getElementById(`primerSeccionDatos4`);
const primeraSeccion5 = document.getElementById(`primerSeccionDatos5`);

switchBoton1.addEventListener('change',function(){
    if(switchBoton1.checked)
    {
        //console.log("entra pero no funciona :v");
        //document.documentElement.scrollTop = 0;
        primeraSeccion.style.animation  = "MenuDesActivado 0.1s 1 forwards";
        primeraSeccion1.style.animation = "MenuDesActivado 0.1s 1 forwards";
        primeraSeccion2.style.animation = "MenuDesActivado 0.1s 1 forwards";
        primeraSeccion3.style.animation = "MenuDesActivado 0.1s 1 forwards";
        primeraSeccion4.style.animation = "MenuDesActivado 0.1s 1 forwards";
        primeraSeccion5.style.animation = "MenuDesActivado 0.1s 1 forwards";
        resumenCuadro.style.animation   = "CuadroCorto     0.4s 1 forwards";
    }
    else{
        //console.log("entra pero no funciona :v");
       
        primeraSeccion.style.animation  = "MenuActivado 0.1s 1 forwards";
        primeraSeccion1.style.animation = "MenuActivado 0.1s 1 forwards";
        primeraSeccion3.style.animation = "MenuActivado 0.1s 1 forwards";
        primeraSeccion2.style.animation = "MenuActivado 0.1s 1 forwards";
        primeraSeccion4.style.animation = "MenuActivado 0.1s 1 forwards";
        primeraSeccion5.style.animation = "MenuActivado 0.1s 1 forwards";
        resumenCuadro.style.animation   = "CuadroNormal 0.4s 1 forwards";
        //document.documentElement.scrollTop = 440;
    }
})

