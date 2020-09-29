# PerreraVanilaJSClient

Proyecto web con Vanilla JavaScript para consumir un servicio rest del proyecto [perreraWebService]

![screenshot](screenshot.png?raw=true)


## Tecnología
En este proyecto usaremos la siguiente tecnología:

- HTML
- CSS
- JavaScript Vanilla sin framework
- AJAX Asyncronous JavaScript And XML, para realizar las llamadas al servicio rest
- Framework de frontend [materializecss](https://materializecss.com)


## Configuración

La url donde escucha el proyecto se puede cambiar en **js/main.js**, cambiando la siguiente línea:
`const endpoint = 'http://localhost:8080/perreraWS/service/perro?orderBy=asc&campo=nombre';`

También tienes disponible un fichero con datos en JSON por si no quieres instalar el proyecto **perreraWebService**, lo puedes encontrar en [api/perros.json](https://github.com/ipartek/perreraVAnilaJSClient/tree/master/api)


**Atención:** con CORS puede que tengas que habilitar un plugin para CORS en tu navegador. Si usamos Firefox instalar el [siguiente plugin](https://addons.mozilla.org/es/firefox/addon/cors-everywhere/)


## Ejecución

Es un proyecto web clásico, por lo cual podemos ejecutarlo en cualquier servidor web o browser sin ningún tipo de configuración extra. Recomendable usar VSCode con el plugin de de LiveServer
