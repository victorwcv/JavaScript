//SCOPE

//functionscope
//el lugar donde defina una variable determina si podre o no accederla

//blockscope
//cuando se declara un var dentro de un bloque se puede acceder desde cualquier oparte del codigo,
//por eso se recomienda usar let and const.

//declarar las variables let por fuera del bloque


//LEXICAL SCOPE

// FUNCION RETORNA FUNCION

function valorEntreDosNumeros (x, y) {
    return function (numero) {
        return(numero >= x && numero <= y);
    }
}

let valor = valorEntreDosNumeros(0, 10);
console.log(valor(5));


// CALLBACK
// forma 1
function saludar () {
    console.log('Hola amigos');
}

function callback (funcion) {
    funcion();
}

callback(saludar);

// forma 2 

callback(function () {
    console.log('Hola Mundo');
})
