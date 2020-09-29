console.info('javascript running');
/*
console.log('sentencia log');
console.debug('sentencia debug');
console.warn('sentencia warn');
console.error('sentencia error');


const perrosMock =
    [{
        "id": 1,
        "nombre": "Lord",
        "raza": "Bichón maltés"
    },
    {
        "id": 2,
        "nombre": "Rintintín",
        "raza": "Pastor alemán"
    },
    {
        "id": 3,
        "nombre": "Snoopy",
        "raza": "Sarnoso"
    },
    {
        "id": 4,
        "nombre": "Óscar Mayer",
        "raza": "Salchicha"
    },
    {
        "id": 5,
        "nombre": "Zapata",
        "raza": "Chihuahua"
    }
    ];*/


// CÓMO FUNCIONA AJAX:

    // 1. Sucede un evento, por ejemplo la carga de una página o se hace clic en un botón.
    // 2. JavaScript crea un objeto XMLHttpRequest.
    // 3. El objeto XMLHttpRequest object envía (send) una petición (request) a un servidor.
    // 4. El servidor procesa la petición
    // 5. El servidor envía una respuesta (response) de vuelta a la página web.
    // 6. JavaScript lee la respuesta.
    // 7. JavaScript ejecuta una acción adecuada, como una actualización de la página.
ª

// Evento para ejecutar nuestro código cuando todo esté cargado.
document.addEventListener('DOMContentLoaded', function () { // JavaScript se ejecuta cuando todo el documento está cargado.

    console.info('DOM cargado');

    const endpoint = 'http://localhost:8080/perreraWS/service/perro?orderBy=asc&campo=id';
    console.debug('endpoint %s', endpoint);

    // Haremos una llamada AJAX una vez que esté todo cargado. Va a ser una llamada asíncrona para cargar el listado de perros.
    var xhttp = new XMLHttpRequest(); // xhttp se encarga de hacer la petición.
    // onreadystatechange: cada vez que cambia readystate se ejecuta la función. Esta entra cinco veces.
    xhttp.onreadystatechange = function () { 

        console.debug('endpoint %s', this.readyState); // readyState contiene el estado de la petición.
        if (this.readyState == 4 && this.status == 200) { // status devuelve el código de estado de la petición.

            console.debug('response está lista status %s texto %s', this.status, this.responseText);
            const perros = JSON.parse(this.responseText); // responseText devuelve los datos de la respuesta como un String
            populateList(perros);

            let elLoader = document.getElementById('loader'); // Selecciona el elemento del documento con el id loader y lo asigna a  la variable elLoader.
            elLoader.style.display = 'none'; // Cambia el atributo display a none.
            console.debug('loader ocultado');

        } // if

    }; // onreadystatechange

    xhttp.open("GET", endpoint); // open hace la petición.
    // ATENCIÓN: xhttp.send() hace la petición asíncrona pero debemos programar la respuesta dentro del método "xhttp.onreadystatechange".
    xhttp.send() // send envía las peticiones. Hasta que no se hace un send no entra onreadystagechange.

}); // DOMContentLoaded


/**
 * Detecta los cambios en el filtro y realiza una nueva llamada AJAX para refrescar la lista con la ordenación deseada.
 */
function refresh() {

    const order = (document.getElementById('order').checked) ? 'desc' : 'asc';
    const campo = document.getElementById('campo').value;
    console.debug('Cambio filtro order = %s campo = %s', order, campo);

    const url = `http://localhost:8080/perreraWS/service/perro?orderBy=${order}&campo=${campo}`;
    console.debug(url);

    // Llamada AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const perros = JSON.parse(this.responseText);
            populateList(perros);

        } // if

    } //onreadystatechange

} // refresh


/** 
 *  Rellena la lista con datos de perros
 * @param{*} data @see perrosMock para saber el formato JSON.
*/
function populateList(data) {
    let elLista = document.getElementById('lista');
    elLista.innerHTML = ''; // Cambia el atributo innerHTML (el contenido) a vacío.
    console.debug('Lista vaciada');

    data.forEach(perro => { // Recorre el array perrosMock. => sustituye a function.

        // Las comillas francesas `` permiten la tabulación del contenido HTML y la interporlación de variables.
        elLista.innerHTML += `<li class="collection-item avatar">
                                <img src="${perro.imagen}" alt="" class="circle">
                                <span class="title">${perro.nombre}</span>
                                <p>${perro.raza}</p>
                              </li>`;

        console.trace('Lista cargada con perros json');

    }); // foreach

} // populateList