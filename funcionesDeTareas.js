// aplicacion para manipular el json de tareas-

const fs = require('fs'); //El módulo de administración de archivos "fs" implementa la programación asincrónica para procesar su creación, lectura, modificación, borrado etc. fs es el módulo nativo de Node.js que permite interactuar con los archivos del sistema.

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    
    escribirJSON: function (tareas) {
        return fs.writeFileSync (JSON.stringify(tareas, null, ' ' )); // los valores null y ' ', son para que cuando se escriban las nuevas tareas , no se escriban en una linea entera, sino uno debajo del otro.
    },
    guardarTarea: function (tarea){
        let tareas = this.leerJSON (); //trae el array de tareas.json 
        tareas.push(tarea); //coloca el dentro del array 'tareas', la nueva tarea que esta como argumento de la funcion.
        this.escribirJSON (tareas); //una vez que coloco con el push la tarea nueva, vuelve a guardar todo el array de objeto en formato JSON dentro de tareas.json
    } //escribirJSON, se lo puede poner al final sin necesidad de poner escribirJSON dentro de guardarJSON.
}

module.exports = archivoTareas;