const tarea = {
    alias: 't',
    demand: true,
    desc: 'Digite la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        tarea
    })
    .command('listar', 'Lista todas las tareas', {

    })
    .command('editar', 'Editar una tarea', {
        tarea,
        estado: {
            alias: 'e',
            default: 'true'
        }

    })
    .command('borrar', 'Borrar una tarea', {
        tarea
    })
    .argv;

module.exports = {
    argv
}