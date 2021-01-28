

const $infoUsuario = document.querySelector('#info-usuario')
//guardo en la variable el boton
//hago una función con el método on click con la variable que tiene la info del boton (evento)

$infoUsuario.onclick= function() {

    const $primerNombreUsuario = document.querySelector('#primer-nombre-usuario' || 'falta primer nombre') //guardamos en la variable el tag
    const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario') // same
    const $apellidoUsuario = document.querySelector('#apellido-usuario')  // same
    const $edadUsuario = document.querySelector('#edad-usuario') //same
    
    const nodoResultado = document.querySelector('#resultado')  //tomamos el nodo de resultado y lo guardamos en una variable
    const textoResultado = document.createElement('p') //creamos un nuevo elemento como input
    const textoDatos = document.createTextNode((`Nombres y Apellido: ${$primerNombreUsuario.value} ${$segundoNombreUsuario.value} ${$apellidoUsuario.value}\n Edad: ${$edadUsuario.value}`))
    textoResultado.appendChild(textoDatos) //le creamos un nodo hijo a textoResultado, que es textoDatos
    nodoResultado.appendChild(textoResultado)  //a nodoResultado le creamos un nodo hijo que es el nodo creado anteriormente
    document.querySelector('h1').innerText = `Bienvenido, ${$primerNombreUsuario.value}`//seleccionamos el texto interior de h1
    //y le asignamos uno nuevo con bienvenido + la variable del nombre usuario(su value, sino te pasa el esqueleto)



}


