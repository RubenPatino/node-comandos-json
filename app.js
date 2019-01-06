require('colors');
const argv = require('./config/yargs').argv;
const procesador = require('./process/procesador');

let comando = argv._[0];
let tarea, estado;

switch (comando) {
    case 'crear':
        tarea = argv.tarea;
        procesador.crearTarea(tarea);
        break;
    case 'listar':
        procesador.listarTareas();
        break;
    case 'editar':
        tarea = argv.tarea;
        estado = argv.estado;
        procesador.editarTarea(tarea, estado);
        break;
    case 'borrar':
        tarea = argv.tarea;
        procesador.borrarTarea(tarea);
        break;
    default:
        console.log('No se reconoce el comando.');
}