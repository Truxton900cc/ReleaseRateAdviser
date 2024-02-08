const site = window.location.hostname;

var ReleasedCallStored = localStorage.getItem('ReleasedCalls');
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

function injectJSCode(code){
   const scriptElement = document.createElement('script');
   scriptElement.setAttribute('type','text/javascript');
   scriptElement.textContent = code;
   var cuerpo = document.body.tbody;
   //document.documentElement.appendChild(scriptElement);
   cuerpo.appendChild(scriptElement);
}

if(site.includes("wwe.uhc.com")){
   injectJSCode(`console.log('Agregue una linea de codigo!! 2');`);

   //injectJSCode(` const HangUpButtonSebas  = document.getElementsByClassName("wwe-login-container");`);
   
   //injectJSCode(` const HangUpButtonSebas  = document.getElementById("wwe-login-container");`);

   //injectJSCode(` console.log(HangUpButtonSebas)`);

   //injectJSCode(` function ContarColgar(){

   //   console.log("Colgo!");

   //}`);

   //injectJSCode(` HangUpButtonSebas.addEventListener("click", ContarColgar);`);
  
      
     
   console.log("Paila no lo pude hacer lo siento, se jode :v");
      
}
