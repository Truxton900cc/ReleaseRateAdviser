const site = window.location.hostname;
//alert("Injector - The JavaScript has been inject to:"+site);

//alert(site);

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

 /*if(site.includes("youtube.com")){
   Add_Custom_Style(`
    
        @import url("https://fonts.googleapis.com/css?family=Raleway");

        *{
            font-family: "Raleway" !important;
            color: #00ff40 !important
         }

    `)
}*/

if(site.includes("wwe.uhc.com")){

   alert("Contre Genesys :v"); 

   const custom_colgar = document.createElement('li');

   custom_colgar.setAttribute("id","ColgarId");

   custom_colgar.innerHTML = 'Colgar';

   custom_colgar.addEventListener("click",function(){

         alert("Se agrego el Boton Hpta!! :v");

   });

   document.getElementsByClassName('nav-tabs wwe-tab-header').appendChild(colgar);

  

   /*const custom_element = document.createElement("script");
   custom_element.innerHTML = "alert('Miaucito')";
   document.body.append(custom_element);*/

}