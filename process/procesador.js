require('colors');
const fs = require('fs');
let objectDB = [];

function cargarDB() {
    try {
        objectDB = require('../db/db.json');
    } catch (error) {
        objectDB = [];
    }
}

function guardarDB() {
    let json = JSON.stringify(objectDB);
    fs.writeFile('./db/db.json', json, err => {
        if (!err) {
            console.log('Guardado correctamente.'.bgGreen);
        }
    });
}


function crearTarea(tarea) {
    cargarDB();
    objectDB.push({
        tarea: tarea,
        estado: false
    });
    guardarDB();
}

function listarTareas() {

    cargarDB();

    console.log('=========LISTA DE TAREAS======='.bgBlue);
    for (obj of objectDB) {

        console.log(`TAREA   : ${obj.tarea}`.bgCyan);
        if (obj.estado)
            console.log(`ESTADO  : COMPLETADA`.bgGreen);
        else
            console.log(`ESTADO  : INCOMPLETA`.bgRed);
        console.log('==============================='.bgBlue);
    }
}

function editarTarea(tarea, estado) {
    cargarDB();

    let est = false;
    if (estado === 'true')
        est = true;

    let index = objectDB.findIndex(res => {
        return res.tarea === tarea;
    });
    if (index >= 0) {
        objectDB[index].estado = est;
        guardarDB();
    } else
        console.log('Tarea no esta creada'.bgRed);
}

function borrarTarea(tarea) {

    cargarDB();

    let index = objectDB.findIndex(res => {
        return res.tarea === tarea;
    });

    if (index >= 0) {
        let nuevoObject = objectDB.filter(list => {
            return list.tarea !== tarea;
        })
        objectDB = nuevoObject;
        // delete objectDB[index];
        // objectDB.splice(index, 1);
        console.log('TAREA BORRADA'.bgMagenta);
        guardarDB();
    } else
        console.log('Tarea no esta creada'.bgRed);
}

module.exports = {
    crearTarea,
    listarTareas,
    editarTarea,
    borrarTarea
}