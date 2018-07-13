'use strict'
var calculadora = (function () {//module pattern
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

    //Constantes de Operadores
    const teclaON = document.getElementById("on");;
    const teclaSigno = document.getElementById("sign");;
    const teclaRaiz = document.getElementById("raiz");;
    const teclaDividir = document.getElementById("dividido");;
    const teclaMultiplicar = document.getElementById("por");;
    const teclaRestar = document.getElementById("menos");;
    const teclaSumar = document.getElementById("mas");;
    const teclaIgual = document.getElementById("igual");;
    const teclaPunto = document.getElementById("punto");;
    //variables
    var primerNumero; //variable donde se guarda el primer numero antes de una operacion
    var segundoNumero; //variable donde se guarda el segundo numero antes de una operacion
    var operador; //variable donde se guarda la operacion que se va a realizar


    //eventos para efectos en las teclas

    teclas.addEventListener('mousedown', function(e){//agrego un evento click a la variable teclas
        e.target.style.padding = "2px";
        if(e.target.className=="teclado"||e.target.className=="col1"||e.target.className=="col2"){
            e.target.style.background= "";
            e.target.style.padding= "";
        };
    },false);
    teclas.addEventListener('mouseup', function(e){//agrego un evento click a la variable teclas
        e.target.style.padding = "";
    },false);


    //Eventos para clik en cada boton Número

    numero_0.onclick = function (e){
        resultado.textContent += "0";
        ceroPantalla()
    }
    numero_1.onclick = function (e){
        resultado.textContent += "1";
        ceroPantalla()
    }
    numero_2.onclick = function (e){
        resultado.textContent += "2";
        ceroPantalla()
    }
    numero_3.onclick = function (e){
        resultado.textContent += "3";
    }
    numero_4.onclick = function (e){
        resultado.textContent += "4";
    }
    numero_5.onclick = function (e){
        resultado.textContent += "5";
    }
    numero_6.onclick = function (e){
        resultado.textContent += "6";
    }
    numero_7.onclick = function (e){
        resultado.textContent += "7";
    }
    numero_8.onclick = function (e){
        resultado.textContent += "8";
    }
    numero_9.onclick = function (e){
        resultado.textContent += "9";
    }

    //eventos para click en cada boton Operando
    teclaON.onclick = function (e){
        resetear();
    }
    teclaSumar.onclick = function (e){
        primerNumero = resultado.textContent;
        operador = "+";
        limpiar();
    }
    teclaRestar.onclick = function (e){
        primerNumero = resultado.textContent;
        operador = "-";
        limpiar();
    }
    teclaDividir.onclick = function (e){
        primerNumero = resultado.textContent;
        operador = "/";
        limpiar();
    }
    teclaMultiplicar.onclick = function (e){
        primerNumero = resultado.textContent;
        operador = "*";
        limpiar();
    }
    teclaIgual.onclick = function (e){
        segundoNumero = resultado.textContent;
        resolver();
    }
    //metodos

    function ceroPantalla(){
        if (resultado.textContent==parseInt("0")){
            console.log("si es cero");
            resultado.textContent = "";
        }
    }


    function limpiar(){
        resultado.textContent = "";
    }
    function resetear(){
        resultado.textContent = "";
        primerNumero = 0;
        segundoNumero = 0;
        operador = "";
    }
    function resolver(){
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
        resultado.textContent = res;
    }
})()