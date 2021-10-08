let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2]

switch(accion){
    case 'listar':
        let tareas = archivoTareas.leerJSON (); //creo la variable tareas que adquiere como valor la funcion leerJSON, cuyo valor no es mas que cada valor del array del JSON (tareas y sus estados)
        tareas.forEach((tarea, index) => {
            console.log((index + 1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
            //console.log(index);
            //console.log(tarea);
        //tareas.forEach(function (tarea,index) {
            //return console.log((index + 1) + '. ' + tarea.titulo + ' - ' + tarea.estado)
        });
        break;
    case 'crear':
        let titulo = process.argv[3] //capta el valor de titulo que entra en indice 3 por consola.
        let tarea = {
            titulo : titulo,
            estado : 'pendiente'
        };
        archivoTareas.guardarTarea(tarea);
        break;

    case undefined:
        console.log('Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo que quieres hacer');
        console.log('Las funciones que tengo son: listar');
        break;
}
