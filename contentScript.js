const site = window.location.hostname;


function esperar(){
   console.log('Ya espere :v');
   if(site.includes("wwe.uhc.com")){

      injectButton(`Enviar Numero`);

      injectJSCode(`
      
         var id = "ckcjnlflffgcikmmbakabelmbkjeopnp";

         let enviar = document.getElmentById("sendMessageButton");

         enviar.addEventListener('click',enviarNumero);

         function enviarNumero(){

            chrome.runtime.sendMessage(id,{numero: 42}, function(response){
         
            console.log(response);
            
         }

         });

      `);  
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

setTimeout(esperar,5000);
//setInterval(esperar,15000);

function injectJSCode(code){
   const scriptElement = document.createElement('script');
   scriptElement.setAttribute('type','text/javascript');
   scriptElement.textContent = code;
   var cuerpo = document.body;
   //document.documentElement.appendChild(scriptElement);
   cuerpo.appendChild(scriptElement);
   
}

function injectButton(code){
   const scriptElement = document.createElement('button');
   scriptElement.setAttribute('type','button');
   scriptElement.setAttribute('id','sendMessageButton');
   scriptElement.textContent = code;
   var cuerpo = document.head;
   //document.documentElement.appendChild(scriptElement);
   cuerpo.appendChild(scriptElement);
}

