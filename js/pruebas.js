function probarNoVacio() {
    console.assert(
        noVacio('') === 'El campo no puede estar vacio', 'noVacio no validó para que el texto no sea vacio'
    );
    console.assert(
        noVacio('a') === '', 'noVacio no funcionó con un input válido'
    );
}


function probarMinimoCaracteres(cantidad) {
    let string = '';
    for (let i = 0; i < cantidad-1; i++){
        string = string + '1';
    }
    console.assert(
        minimoCaracteres(string, cantidad) === `La cantidad minima de caracteres es ${cantidad}.`,
        `minimoCaracteres no validó para que la cantidad mínima de caracteres sea ${cantidad}`
    );
    string = string + '1';
    console.assert(
        minimoCaracteres(string, cantidad) === '',
        `minimoCaracteres no funcionó con un input válido.`
    );
}


function probarMaximoCaracteres(cantidad) {
    let string = '';
    for (let i = 0; i < cantidad+1; i++){
        string = string + '1';
    }
    console.assert(
        maximoCaracteres(string, cantidad) === `La cantidad maxima de caracteres es ${cantidad}.`,
        `maximoCaracteres no validó para que la cantidad máxima de caracteres sea ${cantidad}`
    );
    string = string.slice(0,-1);
    console.assert(
        maximoCaracteres(string, cantidad) === '',
        `maximoCaracteres no funcionó con un input válido.`
    );
}


function probarValidarCiudad() {
    console.assert(
        noVacio('') === 'El campo no puede estar vacio', 'noVacio no validó para que el texto no sea vacio'
    );
    console.assert(
        noVacio('Buenos Aires') === '', 'noVacio falló con un input válido'
    );
}


function probarValidarDescripcionRegalo(string, maxCaracteres) {
    // (Las validaciones para que el campo no esté vacío y la cantidad máxima de caracteres sea correcta se hacen en sus respectivas funciones)
    /*
    console.assert(
        validarDescripcionRegalo('', maxCaracteres) === 'El campo no puede estar vacio', 'validarDescripcionRegalo no validó para que el texto no sea vacio'
    );
    string = '';
    for (let i = 0; i < maxCaracteres+1; i++){
        string = string + '1';
    }
    console.assert(
        validarDescripcionRegalo(string, maxCaracteres) === `La cantidad maxima de caracteres es ${maxCaracteres}.`, 'validarDescripcionRegalo no funcionó con una cantidad de caracteres válida.'
    );
    */
    console.assert(
        validarDescripcionRegalo('!_@;.', maxCaracteres) === 'El campo solo puede contener letras y números.', 'validarDescripcionRegalo no validó para que el texto solamente tenga letras y números.'
    );

    console.assert(
        validarDescripcionRegalo(string, maxCaracteres) === '', 'validarDescripcionRegalo no funcionó con un input válido.'
    );
}


probarNoVacio();
probarMinimoCaracteres(2);
probarMaximoCaracteres(50);
probarValidarCiudad();
probarValidarDescripcionRegalo('una bici', 150);

/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
