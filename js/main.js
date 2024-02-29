const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;



function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value; // o tambien ser puede expresar como $form['nombre'].value
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    
    const errorNombre = validarNombre(nombre, 2, 50);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo, 100);
    
    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };
    
    manejarErrores(errores);

    const esExito = manejarErrores(errores) === 0;

    if (esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = "";
        setTimeout(function() {
            window.location.href = "wishlist.html"
        },5000);
    }

    event.preventDefault();
}

function noVacio (campo){
    if (campo.length === 0){
        return 'El campo no puede estar vacio';
    }
    return '';
}


function soloLetrasYNumeros(campo){
    const soloLetrasYNumeros = /^[A-z0-9]+$/.test(campo);
    if (soloLetrasYNumeros === false){
        return `El campo solo puede contener letras y números.`;
    }
    return '';
}


function minimoCaracteres(campo, cantidad) {
    if (campo.length < cantidad){
        return `La cantidad minima de caracteres es ${cantidad}.`;
    }
    return '';
}


function maximoCaracteres(campo, cantidad) {
    if (campo.length > cantidad){
        return `La cantidad maxima de caracteres es ${cantidad}.`;
    }
    return '';
}


function validarNombre(nombre, minCaracteres, maxCaracteres){
    if (nombre.length === 0){
        return 'El campo no puede estar vacio';
    }
    if (nombre.length < minCaracteres){
        return `La cantidad minima de caracteres es ${minCaracteres}.`;
    }
    if (nombre.length > maxCaracteres){
        return `La cantidad maxima de caracteres es ${maxCaracteres}.`;
    }
}


function validarCiudad(ciudad){
    return noVacio(ciudad);
}


function validarDescripcionRegalo(descripcionRegalo, maxCaracteres){
    noVacio(descripcionRegalo);
    maximoCaracteres(descripcionRegalo, maxCaracteres);
    const soloLetrasYNumeros = /^[A-z0-9]+$/.test(descripcionRegalo);
    if (soloLetrasYNumeros === false){
        return 'El campo solo puede contener letras y números.';
    }
}


function manejarErrores(errores){

    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;
    $errores.innerHTML = "";

    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            cantidadErrores++;
            $form[key].classname = "error";
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }
        else {
            $form[key].classname = "";
        }
    });

    return cantidadErrores;
}
