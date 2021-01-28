// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
function tareaUno() {   //se hacen las tareas dentro de funciones para que no se pisen las variables globales
    for(let i = 0; i <= 22; i+=3) {
        console.log(i)
    }
    return
}

tareaUno()
// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function tareaDos() {
    let numero = 10
    while( numero >= 1 ) {
        console.log(numero)
        numero--
    }
    return
}
tareaDos()

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

function FizzBuzz() {
    for(let i = 1; i <= 50; i++) {

        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')

        } else if( i % 5 === 0 ) {
            console.log('Buzz')

        } else if( i % 3 === 0 ) {
            console.log('Fizz')

        } else {
            console.log(i)
        }
    }
}

FizzBuzz()

function FizzBuzzCorta() {
    for( let i = 1; i <= 50; i++ ) {

        let texto = ''

        if( i % 3 === 0) {    //los dos if estan separados, no son de la misma estructura
            texto = 'Fizz'
        }

        if( i % 5 === 0 ) {
            texto += 'Buzz'   //el += es para que le si llega a ser multiplo de 3 y 5 se le sume a Fizz
        }  //funciona igual el FizzBuzz 

        console.log( texto || i )
    }
}

FizzBuzzCorta()

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])


//Ejemplo de operador ternario, con la forma simple, y con el operador ternario

function entrarAlBar( edad = 18) {

    edad >= 18 ?  console.log('Bienvenido al bar') : concosle.log('No podes entrar al bar')
                 // si es V ^      si es F ^
    // OPERADOR TERNARIO: (condición)  ?   (si es true) : (si es false)            
    /* VERSIÓN COMÚN Y MÁS LARGA
    if( edad >= 18 ) {
        console.log( 'Bienvenido al bar')
    } else {
        console.log('No podes entrar al bar')
    }*/

}

entrarAlBar()
///////////////////////////////////////////////////
//Expresiones de función y Funciones anónimas
// las expresiones de fx son:
// fx son first class, las puedo guardar en una variable
let z =  function(p1) {
    console.log(p1)
    console.log('esta es la fx z')
}
//puedo ejecutar la variable, porque la variable es de tipo funcion
//la función dentro de la variable z no tiene nombre
z(1)

//////   Sirven las fx anónimas para hacer callbacks, las puedo pasar como parámetro de otras fx

function sumar(n1, n2) {
    return n1 + n2
}

function restar (n1, n2) {
    return n1 - n2
}
function tareaOperador(funcionOperador, n1, n2) {
    console.log(funcionOperador, n1, n2)//hasta ahora funcionOperador no es nada
    //cuando la ejecute la fx es cuando yo le voy a pasar la fx correspondiente

}

tareaOperador(sumar, 1, 2)   //le paso solo el nombre de la fx sin ()
//no quiero pasarla ya ejecutada, o sea paso la referencia  a la funcion

