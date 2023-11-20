var switchBoton1 = document.getElementById('btn-switch');
var switchBoton2 = document.getElementById('btn-switch2');

const resumenCuadro   = document.getElementById(`resumen`);
const calendarioCuadro= document.getElementById(`calendario`);

const primeraSeccion  = document.getElementById(`primerSeccionDatos`);
const primeraSeccion1 = document.getElementById(`primerSeccionDatos1`);
const primeraSeccion2 = document.getElementById(`primerSeccionDatos2`);
const primeraSeccion3 = document.getElementById(`primerSeccionDatos3`);
const primeraSeccion4 = document.getElementById(`primerSeccionDatos4`);
const primeraSeccion5 = document.getElementById(`primerSeccionDatos5`);

var elementosDiv;

document.addEventListener('DOMContentLoaded', function() {
    // Obtén los elementos div dentro del contenedor de la cuadrícula
    elementosDiv = document.querySelectorAll('.grid-item');

    switchBoton2.addEventListener('change',function(){

        if(switchBoton2.checked){
            
            calendarioCuadro.style.animation = "FrameSizeShort  0.4s 1 forwards";
            elementosDiv.forEach(element => {
                //element.style.animation = "MenuDeActivated  0.1s 1 forwards";
                element.style.opacity = 0;
                element.style.display = "none";
            });    
        }
        else{
            calendarioCuadro.style.animation = "FrameSizeNormal 0.4s 1 forwards";
            elementosDiv.forEach(element => {
                //element.style.animation = "MenuActivated  0.1s 1 forwards"
                element.style.opacity = 1;
                element.style.display = "block";
            }); 
            //gridItems.style.animation = "MenuActivated 0.1s 1 forwards";
            
        }
    
    })

    
    
    //console.log(elementosDiv);
    //console.log(cosa);
  });

/* ----------------------------------------------------------------- */



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
       
    }
})


