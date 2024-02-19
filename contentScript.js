const site = window.location.hostname;


function esperar(){
   console.log('Ya espere :v');
   if(site.includes("wwe.uhc.com")){

      injectJSCode(`var a = 0;`);

      injectJSCode(`var elemento = document.querySelector('.main_body');`);

      injectJSCode(`console.log(elemento);`);

      injectJSCode(`var elemento1 = elemento.querySelector('.application_view');`);

      injectJSCode(`console.log(elemento1);`);

      injectJSCode(`var elemento2 = elemento1.querySelector('.module-content');`);

      injectJSCode(`console.log(elemento2);`);

      injectJSCode(`var elemento3 = elemento2.querySelector('.agent-desktop');`);

      injectJSCode(`console.log(elemento3);`);

      injectJSCode(`var elemento4 = elemento3.querySelector('#agent-desktop-container');`);

      injectJSCode(`console.log(elemento4);`);

      injectJSCode(`var elemento5 = elemento4.querySelector('#wwe-workspace-container);`);

      injectJSCode(`console.log(elemento5);`);

      /*injectJSCode(`var elemento6 = elemento5.querySelector('.tab-content wwe-tab-content');`);

      injectJSCode(`console.log(elemento6);`);
      
      injectJSCode(`var elemento7 = elemento6.querySelector('.wwe-workspace-container');`);

      injectJSCode(`var elemento8 = elemento7.querySelector('.tab-content wwe-tab-content');`);

      injectJSCode(`var elemento9 = elemento8.querySelector('.wwe-tab-panel wwe-case-tab-content tab-pane active');`);

      injectJSCode(`var elemento10 = elemento9.querySelector('.wwe-report-custom-view');`);
      
      injectJSCode(`var elemento10 = elemento9.querySelector('.wwe-report-custom-view');`);

      injectJSCode(`var elemento11 = elemento10.querySelector('.wwe-report-custom-grid');`);

      injectJSCode(`var elemento12 = elemento11.querySelector('.scroll-wrapper');`);

      injectJSCode(`var elemento13 = elemento12.querySelector('.DataTables_Table_3_wrapper');`);

      injectJSCode(`var elemento14 = elemento13.querySelector('.dataTables_scroll');`);

      injectJSCode(`var elemento15 = elemento14.querySelector('.dataTables_scrollHead ui-state-default');`);

      injectJSCode(`var elemento16 = elemento15.querySelector('.dataTables_scrollBody');`);

      injectJSCode(`var elemento17 = elemento16.querySelector('.wwe-custom-mystat-report-table dataTable no-footer');`);

      injectJSCode(`var elemento18 = elemento17.querySelector('.agent odd');`);

      injectJSCode(`var elemento19 = elemento18.querySelector('. right');`);

      injectJSCode(`var elemento20 = elemento19.querySelector('.stat-value');`);


      injectJSCode(`console.log(elemento20);`);

      //injectJSCode(`var inputUserName = elemento.querySelector('.wwe-login-form-input');`);

      //injectJSCode(`console.log(inputUserName);`);

      //injectJSCode(`console.log(releaseButton);`);

      /*injectJSCode(`function clickEnElInPut(){
         a++;
         console.log("Numero de clicks: "+a);
      }`);

      injectJSCode(`inputUserName.addEventListener("click", clickEnElInPut);`);*/

      
      /*chrome.runtine.onMessage.addListener(function(mensaje,sender,sendResponse){

         if(mensaje.accion === "obtener_informacion"){
            var Informacion = "Informacion obtenida desde el script";

            sendResponse({Informacion: informacion});
         }

      });

      injectJSCode(`console.log('Agregue una linea de codigo!! 2');`);
   
      injectJSCode(`chrome.runtime.sendMessage({accion: "Obtener.Informacion"}, function(respuesta){console.log("Respuesta del scriptde fondo", respuesta); } );`);*/


      

      /*injectJSCode(`console.log(elemento);`);

      injectJSCode(`chrome.runtine.onMessage.addListener(function(mensaje,sender,sendResponse){

         if(mensaje.accion === "obtener_informacion"){
            var Informacion = "Informacion obtenida desde el script";

            sendResponse({Informacion: informacion});
         }

      });`);*/

      /*injectJSCode(`var cosa1 = elemento.querySelector('.application_view');`);

      injectJSCode(`var cosa2 = cosa1.querySelector('.module-content');`);

      injectJSCode(`console.log(cosa1);`);

      injectJSCode(`console.log(cosa2);`);
   
      injectJSCode(`var llamadas = window.getComputedStyle(elemento,null)`);

      injectJSCode(`var contenidoBefore = llamadas.getPropertyValue('content')`);
   
      injectJSCode(`console.log('Pseudo elemento Llamadas'+llamadas);`);

      injectJSCode(`console.log(llamadas);`);

      injectJSCode(`console.log(contenidoBefore);`);

      injectJSCode(`var ReleasedCallStored = localStorage.getItem('ReleasedCalls')`);
      injectJSCode(`console.log(ReleasedCallStored)`);*/

      injectJSCode(`console.log('Aqui termina la injeccion :v');`);
   
      //injectJSCode(`var contenidoPseudoElementoBefore = window.getComputedStyle(elemento, '::after').getPropertyValue('content');`);
   
      //injectJSCode(`console.log("Contenido del pseudo-elemento ::before: ", contenidoPseudoElementoBefore);`);
   
      //injectJSCode(` const HangUpButtonSebas  = document.getElementsByClassName("wwe-login-container");`);
      
      //injectJSCode(` const HangUpButtonSebas  = document.getElementById("wwe-login-container");`);
   
      //injectJSCode(` console.log(HangUpButtonSebas)`);
   
      //injectJSCode(` function ContarColgar(){
   
      //   console.log("Colgo!");
   
      //}`);
   
      //injectJSCode(` HangUpButtonSebas.addEventListener("click", ContarColgar);`);
     
         
   }
   
}

//alert("Injector - The JavaScript has been inject to:"+site);

//alert(site);

//const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

 /*if(site.includes("youtube.com")){
   Add_Custom_Style(`
    
        @import url("https://fonts.googleapis.com/css?family=Raleway");

        *{
            font-family: "Raleway" !important;
            color: #00ff40 !important
         }

    `)
}*/

/*if(site.includes("wwe.uhc.com")){

   alert("Contre Genesys :v"); 

   const custom_colgar = document.createElement('li');

   custom_colgar.setAttribute("id","ColgarId");

   custom_colgar.innerHTML = 'Colgar';

   custom_colgar.addEventListener("click",function(){

         alert("Se agrego el Boton Hpta!! :v");

   });

   document.getElementsByClassName('nav-tabs wwe-tab-header').appendChild( );

  

   /*const custom_element = document.createElement("script");
   custom_element.innerHTML = "alert('Miaucito')";
   document.body.append(custom_element);*/

//}

setTimeout(esperar,20000);
//setInterval(esperar,15000);
function injectJSCode(code){
   const scriptElement = document.createElement('script');
   scriptElement.setAttribute('type','text/javascript');
   scriptElement.textContent = code;
   var cuerpo = document.body;
   //document.documentElement.appendChild(scriptElement);
   cuerpo.appendChild(scriptElement);
   return code;
}

