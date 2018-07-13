"use strict"

var calculadora = (function (){
    var display = document.getElementById("display");

    var teclas = document.querySelector(".teclado");//capturo todo el contenido en el <div class = teclado>

    teclas.addEventListener('click', function(e){//agrego un evento click a la variable teclas
        var tecla = e.target.id;
        console.log(tecla);
        //if(tecla.id == "0"){

        //}
        //switch(e.target)
        //for(var i = 0; i++)

    },false);

})();