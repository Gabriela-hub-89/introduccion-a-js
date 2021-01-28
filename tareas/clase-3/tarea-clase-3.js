// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
let nombre = prompt('cuál es tu nombre')
const miNombre = 'Gabriela'
const nombreMiMama = 'Nilda'
if(nombre === miNombre) {
    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`)
} 
else if(nombre === nombreMiMama) {
    console.log(`Hola ${nombre}, te llamas igual que mi mamá`)
} else {
    console.log(`Hola ${nombre}!`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
const miEdad = 31
let edadUsuario = Number(prompt('¿Cuántos años tenes?')) 
if(edadUsuario === miEdad) {
    console.log('tenemos la misma edad')
} else if(edadUsuario < miEdad) {
    console.log('sos más chico que yo')
}else {
    console.log('sos más grande que yo')
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
let usuarioTieneDocumento = (prompt('¿Tenes documento? si/no')).toLowerCase()
if(usuarioTieneDocumento === 'si') {
    let preguntarEdad = Number(prompt('¿cuantos años tenes?'))
    if(preguntarEdad >= 18) {
        console.log('podes entrar al bar')
    } else if( preguntarEdad < 18){
        console.log('no podes entrar al bar')
    }
}else if(usuarioTieneDocumento === 'no') {
    console.log('no podes pasar al bar')
}else {
    console.log('no entendi lo que dijiste')
}


//otra forma de hacerlo, más eficiente, o con código más limpio

function tarea() {
    function tareaCompararNombres()
    function tareaCompararEdades()
    function tareaEntradaAlBar()
}

function tareaCompararNombres() {
    const NOMBRE_MIO = 'gabriela'
    const NOMBRE_MI_GATO = 'symur'

    const nombreUsuario = prompt('¿cómo te llamás?')
    const nombreUsuarioMinusculas = nombreUsuario.toLowerCase()

    if(NOMBRE_MIO === nombreUsuarioMinusculas) {
        alert(`Bienvenido tocayo, yo también me llamo ${NOMBRE_MIO}`)
    } else if (NOMBRE_MI_GATO === nombreUsuarioMinusculas) {
        alert(`${NOMBRE_MI_GATO} ?, te llamas igual que mi gato, bienvenido igual!`)
    } else {
        alert(`Bienvenido ${nombreUsuario}`)
    }
}

function tareaCompararEdades() {
    const EDAD_MIA = 31
    
    const edadUsuario = Number(prompt('¿Cuantos años tenes?'))

    if(edadUsuario < EDAD_MIA) {
        alert('soy más grande que vos')
    } else if (edadUsuario > EDAD_MIA) {
        alert('soy más chica que vos')
    } else {
        alert(`qué casualidad, tenemos la misma edad, ${EDAD_MIA}`)
    }
}

function tareaEntradaAlBar() {
    const EDAD_MINIMA_ENTRADA = 18
    const SALUDO_ENTRADA = 'asi que queres entrar al bar, vamos a ver'
    alert(SALUDO_ENTRADA)

    const tieneDNI = preguntarDNIEnLaEntrada()

    if(!tieneDNI) {
        return    // SI NO TIENE DNI RETORNO Y LISTO SE TERMINA LA FX AHÍ
    }

    preguntarEdadEnLaEntrada(EDAD_MINIMA_ENTRADA)
}

function preguntarDNIEnLaEntrada() {
    const RESPUESTA_SI ='si'
    const RESPUESTA_NO = 'no'

    const UsuarioTieneDNI = prompt('Tenes DNI (Limitarse a si/no)').toLowerCase()

    if(UsuarioTieneDNI === RESPUESTA_SI) {
        return true
    } else if (UsuarioTieneDNI === RESPUESTA_NO) {
        alert('andá a buscar tu DNI')
        return false
    } else {
        alert('no te entendí')
        return preguntarDNIEnLaEntrada() // si no entendí la respuesta del usuario, se vuelve a ejecutar todo
    }

    return false
}

tarea()