    const ubicacionMes = document.getElementById("MesActual");    

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha = new Date();

    //console.log(fecha);

    const numeroMes = fecha.getMonth();
    const numeroDia = fecha.getDate();

    console.log("Fecha: "+fecha);
    console.log("Numero dia: "+numeroDia);

    //console.log(numeroMes);

    let CantidadDias = 0;

    let ParOImpar = 0;

    let mesActual = meses[numeroMes];

    ubicacionMes.textContent = mesActual;

    if(numeroMes<7){// Enero[0] 31 , Febrero[1] 28, Marzo[2] 31, Abril[3] 30, Mayo[4] 31, Junio[5] 30, Julio[6] 31,

      if(numeroMes == 1){ // Febrero[1]
        console.log("Tiene 28 dias");
        CantidadDias = 28;
      }
      else{ // Enero[0], Marzo[2], Abril[3], Mayo[4], Junio[5], Julio[6]

        ParOImpar = numeroMes % 2;

        if(ParOImpar == 0){
  
          console.log("Tiene 31 dias");
          CantidadDias = 31;
  
        }
        else{
          console.log("Tiene 30 dias");
          CantidadDias = 30;
        }

      }

    }
    else{

      //console.log("Este es el mes numero:" + numeroMes);
      ParOImpar = numeroMes % 2;
      //console.log("Numero: " + ParOImpar);
      if(ParOImpar == 0){

        console.log("Tiene 30 dias");
        CantidadDias = 30;

      }
      else{
        console.log("Tiene 31 dias");
        CantidadDias = 31;
      }

    }

    localStorage.setItem("conteoDias",CantidadDias);

    const cuadrosFecha = [];

    for(let i = 1; i<= CantidadDias; i++){

        const para = document.createElement("div");
        const node = document.createTextNode(i);

        para.className = 'grid-item';

        para.id = i;

        para.addEventListener('click', function(event){

            var textoElemento = event.target.id;
            //alert(textoElemento);
            loquesea(textoElemento);
            console.log(textoElemento);
        });

        para.appendChild(node);

        cuadrosFecha[i] = para;

        const element = document.getElementById("ContenedorMeses");
        element.appendChild(para)

        if(i === numeroDia){
            para.style.backgroundColor = 'green';
        }

        /*function cambiarColor(numeroDia, color){

          var elementoDia = document.getElementById(numeroDia);

          if(elementoDia){
            elementoDia.style.backgroundColor = color;
          }

        }*/

    
    }
    
/*let dia27 = "26";
let mes11 = "11";
let ano23 = "2023";*/

function loquesea(dia){
    //alert(dia);
    /*var dhabil = 0;
    if(dia>9){
      dia++;  
    }
    var d = new Date(ano23+"-"+mes11+"-"+dia.toString());
    console.log(d);
    console.log(d.getDay())

    for(let i = 1; i<= CantidadDias; i++){

        if(d.getDay()>0 && d.getDay()<6)
        {
            dhabil++;
        }

    }
    console.log("Dias Habiles:"+dhabil);*/
}

  