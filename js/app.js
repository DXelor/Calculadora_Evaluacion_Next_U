'use strict'
var calculadora = (function () {//module pattern
    //variables
    var primerNumero; //variable donde se guarda el primer numero antes de una operacion
    var segundoNumero; //variable donde se guarda el segundo numero antes de una operacion
    var operador; //variable donde se guarda la operacion que se va a realizar

    var resultado = document.getElementById("display");//pantalla de la calculadora
    var teclas = document.querySelector(".teclado");//capturo todo el contenido en el <div class = teclado>

    //Constantes de Números
    const numero_0 = document.getElementById("0");
    const numero_1 = document.getElementById("1");
    const numero_2 = document.getElementById("2");

    const numero_3 = document.getElementById("3");
    const numero_4 = document.getElementById("4");
    const numero_5 = document.getElementById("5");

    const numero_6 = document.getElementById("6");
    const numero_7 = document.getElementById("7");
    const numero_8 = document.getElementById("8");
    const numero_9 = document.getElementById("9");

    //Punto
    const teclaPunto = document.getElementById("punto");

    //Constantes de Operadores
    const teclaON = document.getElementById("on");
    const teclaSigno = document.getElementById("sign");
    const teclaRaiz = document.getElementById("raiz");
    const teclaDividir = document.getElementById("dividido");
    const teclaMultiplicar = document.getElementById("por");
    const teclaRestar = document.getElementById("menos");
    const teclaSumar = document.getElementById("mas");
    const teclaIgual = document.getElementById("igual");

    //eventos para efectos en las teclas

    teclas.addEventListener('mousedown', function(e){//agrego un evento click a la variable teclas
        e.target.style.padding = "1px";//
        if(e.target.className=="teclado"||e.target.className=="col1"||e.target.className=="col2"){
            e.target.style.background= "";
            e.target.style.padding= "";
        };
    },false);
    teclas.addEventListener('mouseup', function(e){//agrego un evento click a la variable teclas
        e.target.style.padding = "";
    },false);

    //Eventos para click en cada boton Número
    numero_0.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "0";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "0";
        }
    })
    numero_1.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "1";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "1";
        }
    })
    numero_2.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "2";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "2";
        }
    })
    numero_3.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "3";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "3";
        }
    })
    numero_4.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "4";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "4";
        }
    })
    numero_5.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "5";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "5";
        }
    })
    numero_6.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "6";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "6";
        }
    })
    numero_7.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "7";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "7";
        }
    })
    numero_8.addEventListener("click", function(){
        if (resultado.innerHTML.length ==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "8";
        }else if (resultado.innerHTML.length<8){
            resultado.innerHTML += "8";
        }
    })
    numero_9.addEventListener("click", function(){
        if(resultado.innerHTML.length==1 && resultado.textContent==parseInt("0")){
            resultado.innerHTML = "9";
        }else if(resultado.innerHTML.length>=1 && resultado.innerHTML.length<8){
            resultado.innerHTML += "9";
        };
    })
    //Evento del punto
    teclaPunto.addEventListener("click", function(){punto();})
    //evento para el signo
    teclaSigno.addEventListener("click",function(){signo();})

    //eventos para click en cada boton Operando
    teclaON.onclick = function (e){resetear();}

    teclaSumar.onclick = function (e){
        primerNumero = resultado.innerHTML;
        operador = "+";
        limpiar();
    }
    teclaRestar.onclick = function (e){
        primerNumero = resultado.innerHTML;
        operador = "-";
        limpiar();
    }
    teclaDividir.onclick = function (e){
        primerNumero = resultado.innerHTML;
        operador = "/";
        limpiar();
    }
    teclaMultiplicar.onclick = function (e){
        primerNumero = resultado.innerHTML;
        operador = "*";
        limpiar();
    }
    teclaIgual.onclick = function (e){
        segundoNumero = resultado.innerHTML;
        resolver();
    }

    //Funciones
    function limpiar(){//Metodo para limpiar la pantalla
        resultado.innerHTML = "0";
    }
    function resetear(){//Metodo para ON/C
        resultado.innerHTML = "0";
        primerNumero = 0;
        segundoNumero = 0;
        operador = "";
    }
    function punto(){//metodo para escribir un punto
        if(resultado.innerHTML.length>=1 && resultado.innerHTML != "0" && resultado.innerHTML != "." && resultado.innerHTML.substring(resultado.innerHTML.indexOf("."))!="."){
            resultado.innerHTML += ".";
            var unPunto = resultado.innerHTML.indexOf(".");
        }
    }
    function signo(){//Metodo para el boton de signo
        if(resultado.innerHTML[0] != "-"){
            resultado.innerHTML = "-" + resultado.innerHTML;
        }else if(resultado.innerHTML[0] == "-"){
            resultado.innerHTML = resultado.innerHTML.substring(1);
        }
    }
    function resolver(){//Metodo para resolver operaciones Basicas
        var res = 0;
        switch(operador){
            case "+":
                res = parseFloat(primerNumero) + parseFloat(segundoNumero);
                break;
            case "-":
                res = parseFloat(primerNumero) - parseFloat(segundoNumero);
                break;
            case "/":
                res = parseFloat(primerNumero) / parseFloat(segundoNumero);
                break;
            case "*":
                res = parseFloat(primerNumero) * parseFloat(segundoNumero);
                break;
        }
        resetear();
        resultado.innerHTML = res;
    }
})()