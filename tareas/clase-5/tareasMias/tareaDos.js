//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let segundosActual = 0
let minutosActual = 0
let horasActual = 0

let enteroSegundos = 0
let enteroMinutos = 0

const $calcularTiempoTotal = document.querySelector('#calcular-tiempo-total')
$calcularTiempoTotal.onclick = function() {

    const $claseUnoHoras = Number(document.querySelector('#clase-1-horas').value)
    const $claseUnoMinutos = Number(document.querySelector('#clase-1-minutos').value)
    const $claseUnoSegundos = Number(document.querySelector('#clase-1-segundos').value)

    const $claseDosHoras = Number(document.querySelector('#clase-2-horas').value)
    const $claseDosMinutos = Number(document.querySelector('#clase-2-minutos').value)
    const $claseDosSegundos = Number(document.querySelector('#clase-2-segundos').value)

    const $claseTresHoras = Number(document.querySelector('#clase-3-horas').value)
    const $claseTresMinutos = Number(document.querySelector('#clase-3-minutos').value)
    const $claseTresSegundos = Number(document.querySelector('#clase-3-segundos').value)

    const $claseCuatroHoras = Number(document.querySelector('#clase-4-horas').value)
    const $claseCuatroMinutos = Number(document.querySelector('#clase-4-minutos').value)
    const $claseCuatroSegundos = Number(document.querySelector('#clase-4-segundos').value)

    const $claseCincoHoras = Number(document.querySelector('#clase-5-horas').value)
    const $claseCincoMinutos = Number(document.querySelector('#clase-5-minutos').value)
    const $claseCincoSegundos = Number(document.querySelector('#clase-5-segundos').value)
    
    
    const sumaSegundos = $claseUnoSegundos + $claseDosSegundos + $claseTresSegundos + $claseCuatroSegundos + $claseCincoSegundos
    const sumaMinutos = $claseUnoMinutos + $claseDosMinutos + $claseTresMinutos + $claseCuatroMinutos + $claseCincoMinutos
    const sumaHoras = $claseUnoHoras + $claseDosHoras + $claseTresHoras + $claseCuatroHoras + $claseCincoHoras
    

    //tenemos la suma de todos los segundos/ minutos y horas
    //si la suma de segundos o minutos se exceden a 60, pasan al orden superior--> segundos a minutos/ minutos a horas
    //para pasarlo al orden sup se divide por 60, si queda num entero, va todo al sup, si queda un numero decimal
    //la parte entera va al orden superior y la parte decimal, el resto, queda en el mismo orden, y se multiplica *60
    //quedaria--> segundos =  si--> los segundos son mayor a 60
    //                        parte decimal - parte entera *parte entera va a minutos*
    //                        sino--> se le asigna directamente la cantidad total de segundos
    //            minutos =  si la suma total de minutos es mayor a 60
    //                       (parte entera de segundos + parte decimal de minutos) - parte entera de minutos
    //                       sino--> se asigna la totalidad de minutos + los segundos enteros
    //            horas =     --> se suma la totalidad de horas, más la parte entera de minutos
    //

    

    if(sumaSegundos >= 60) {
        let divisionSegundos = sumaSegundos / 60  // aca queda num con coma, hay que separar el entero del decimal
        enteroSegundos = Math.floor(divisionSegundos)  //--> los segundos que van a pasar a minutos
        let decimalSegundos = divisionSegundos - enteroSegundos
        segundosActual = Math.round(decimalSegundos * 60)    //--> estos son los segundos
    } else {
        segundosActual = sumaSegundos
    }

    if(sumaMinutos >= 60) {
        let divisionMinutos = (sumaMinutos + enteroSegundos) / 60
        enteroMinutos = Math.floor(divisionMinutos)  // --> los minutos que van a pasar a horas
        let decimalMinutos = divisionMinutos - enteroMinutos
        minutosActual = Math.round(decimalMinutos * 60)
    } else {
        minutosActual = sumaMinutos
    }

    horasActual = sumaHoras + enteroMinutos


    const resultadoTiempoVideos = document.createTextNode(`El tiempo total de los videos es: ${horasActual} horas, ${minutosActual} minutos, ${segundosActual} segundos`)
    document.querySelector('#resultado-tiempo-total').appendChild(resultadoTiempoVideos)

}
