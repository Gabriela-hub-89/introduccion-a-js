//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//hacemos variable para el boton calcular-- id html
//hacemos variable para la funcion calcular promedio --id html
//hacemos variable para el numero más pequeño --id html
//hacemos variable para el numero más grande --id html
//hacemos variable para el numero más frecuente --id html



const $calcularNumeros = document.querySelector('#calcular')
const $calcularPromedio = document.querySelector('#promedio')
const $calcularNumeroMasPequenio = document.querySelector('#numeroMasChico')
const $calcularNumeroMasGrande = document.querySelector('#numeroMasGrande')
const $calcularNumeroMasFrecuente = document.querySelector('#numeroMasFrecuente')



$calcularNumeros.onclick = function() {
    
    const arrayNumeros = document.querySelectorAll('li')
    let sumador= 0
    let numeroMasChico = Number(arrayNumeros[0].innerText)
    let numeroMasGrande = Number(arrayNumeros[0].innerText)
    
    //promedio
    for(let i = 0; i < arrayNumeros.length; i++) {  
        sumador += Number(arrayNumeros[i].innerText)
    }
    let promedio = sumador / arrayNumeros.length
    console.log(promedio)
    document.querySelector('#promedio').innerText = 'el promedio es ' + promedio

    //numero más chico
    for(let i = 1; i < arrayNumeros.length; i++) {
        if(Number(arrayNumeros[i].innerText) < numeroMasChico) {
            numeroMasChico = Number(arrayNumeros[i].innerText)
        }
    }
    document.querySelector('#numero-mas-chico').innerText = 'el número más pequeño es ' + numeroMasChico

    //numero más grande
    for(let i = 1; i < arrayNumeros.length; i++) {
        if(Number(arrayNumeros[i].innerText) > numeroMasGrande ) {
            numeroMasGrande = Number(arrayNumeros[i].innerText)
        }
    }
    document.querySelector('#numero-mas-grande').innerText = 'el número más grande es ' + numeroMasGrande

    //numero más frecuente
    let numero = 0
    let contador2 = 0
    let repeticion = 1

    for( let i = 0; i < arrayNumeros.length; i++) {
        
        for(let j = 1; j < arrayNumeros.length; j++) {
            if(arrayNumeros[i].innerText === arrayNumeros[j].innerText) {
                contador2++
                
            } 
            if(repeticion < contador2) {
                repeticion = contador2
                numero = arrayNumeros[i].innerText
            }
        
        }
        contador2 = 0
        //console.log(numero)
        
    }
    document.querySelector('#numero-mas-frecuente').innerText = 'el numero más frecuente es ' + numero
    
}

