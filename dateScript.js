    const ubicacionMes = document.getElementById("MesActual");    

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha = new Date();

    //console.log(fecha);

    const numeroMes = fecha.getMonth();

    //console.log(numeroMes);

    let CantidadDias = 0;

    let ParOImpar = 0;

    let mesActual = meses[numeroMes];

    ubicacionMes.textContent = mesActual;

    if(numeroMes<7){// Enero[0] 31 , Febrero[1] 28, Marzo[2] 31, Abril[3] 30, Mayo[4] 31, Junio[5] 30, Julio[6] 31,

      if(numeroMes == 1){ // Febrero[1]
        console.log("Tiene 31 dias");
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

    for(let i = 1; i<= CantidadDias; i++){

        const para = document.createElement("div");
        const node = document.createTextNode(i);

        para.className = 'grid-item';

        para.appendChild(node);

        const element = document.getElementById("ContenedorMeses");
        element.appendChild(para)
    }