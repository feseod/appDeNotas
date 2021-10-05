let fs = require('fs');

let archivoTareas = JSON.parse(fs.readFileSync('tareas.json'));


let accion = process.argv[2]

switch(accion){
    case 'listar':
        console.log(archivoTareas);
        break;
    case undefined:
        console.log('Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo que quieres hacer');
        console.log('Las funciones que tengo son: listar');
        break;
}




