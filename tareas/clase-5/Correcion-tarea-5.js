
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const cantidadDeVideos = document.querySelector('#cantidad-videos')



const $calcularTiempoTotal = document.querySelector('#calcular-tiempo-total')
$calcularTiempoTotal.onclick = function() {

    let sumaSegundos = 0
    let sumaMinutos = 0
    let sumaHoras = 0
    const $segundos = document.querySelectorAll('.segundos')
    const $minutos = document.querySelectorAll('.minutos')
    const $horas = document.querySelectorAll('.horas')

    //suma segundos

    for(let i = 0; i < $segundos.length; i++) {
        sumaSegundos += Number($segundos[i].value)
    }

    //suma minutos

    for(let i = 0; i < $minutos.length; i++) {
        sumaMinutos += Number($minutos[i].value)
    }

    //suma horas

    for(let i = 0; i < $horas.length; i++) {
        sumaHoras += Number($horas[i].value)
    }
        //segundos

        const minutosEnterosDeSegundos = Math.floor(sumaSegundos/ 60)
        const segundosRestantes = sumaSegundos % 60
        
        //minutos
        const totalMinutos = minutosEnterosDeSegundos + sumaMinutos
        const horasEnterasDeMinutos = Math.floor(totalMinutos / 60)
        const minutosRestantes = totalMinutos % 60

        //horas
        const totalHoras = horasEnterasDeMinutos + sumaHoras


    const resultadoTiempoVideos = document.createTextNode(`El tiempo total de los videos es: ${totalHoras} horas, ${minutosRestantes} minutos, ${segundosRestantes} segundos`)
    document.querySelector('#resultado-tiempo-total').appendChild(resultadoTiempoVideos)

}

//para calcular horas minutos y segundos:
//sumo todos los segundos, lo guardo en una variable, para obtener los segundos que pasan a minutos los divido por 60 y con math.floor
//me quedo con la parte entera del numero, ese result lo guardo en una variable
//para obtener los segundos restantes saco el modulo de 60, como divido por 60, todo num que no sea divisible por 60, me va a tirar el resto
// es decir los segundos que sobran --> esos son los seguntos en total
// los segundos que pasan a minutos lo sumo a la suma de minutos y repito todo el proceso, para minutos y horas

