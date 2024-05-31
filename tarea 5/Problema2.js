/* Crea otro código utilizando las características de los usuarios del
Problema I, pero en esta ocasión agrega una funcionalidad, método
recuperarClave */
// Usuario 0
const usuario0 = {
    nombre: 'Henry',
    apellido: 'Martinez',
    email: 'henrymartinez@gmail.com',
    direccion: {
        municipio: 'San Juan Sacatepequez',
        calle: '0',
        numero: '2'
    },
    const claveUsuario0 = recuperarClave(usuario0);
console.log(`La clave del Usuario 0 es: ${claveUsuario0}`);
};

// Usuario 1
const usuario1 = {
    nombre: 'Rosa',
    apellido: 'Gomez',
    email: 'rosagomez@gmail.com',
    direccion: {
        municipio: 'Guatemala',
        calle: '25',
        numero: '3'
    },
    const claveUsuario1 = recuperarClave(usuario1);
console.log('La clave del Usuario 1 es: ${claveUsuario1}');
};

// Usuario 2
const usuario2 = {
    nombre: 'Alejandro',
    apellido: 'Davila',
    email: 'alejandrodavila@gmail.com',
    direccion: {
        municipio: 'Guatemala',
        calle: '32',
        numero: '1'
    },
    const claveUsuario2 = recuperarClave(usuario2);
    console.log(`La clave del Usuario 2 es: ${claveUsuario2}`);
};

// Usuario 3
const usuario3 = {
    nombre: 'Cesar',
    apellido: 'Cardona',
    email: 'cesarcardona@gmail.com',
    direccion: {
        municipio: 'Nueva Concepcion',
        calle: '30',
        numero: '28'
    },
    
};
const claveUsuario3 = recuperarClave(usuario3);
console.log(`La clave del Usuario 3 es: ${claveUsuario3}`);

// Usuario 4
const usuario4 = {
    nombre: 'Ramiro',
    apellido: 'Del Monte',
    email: 'ramirodelmonte@gmail.com',
    direccion: {
        municipio: 'Guatemala',
        calle: '18',
        numero: '7'
    },
    estado: true,
    recuperarClave: function () {
        console.log('Recuperar clave')
    }
    const claveUsuario4 = recuperarClave(usuario4);
console.log(`La clave del Usuario 4 es: ${claveUsuario4}`);
};
