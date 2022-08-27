const express = require("express");
const server = express();
const serverRes = [
    {
        lenguaje: 'html',
        calificacion: '4.5',
        level: '1',
        tiempo: {
            horas: '4',
            min: '12'
        },
        profesor: 'Perro del mal',
        company: 'Perros locos'
    },
    {
        lenguaje: 'js',
        calificacion: '4.5',
        level: '1',
        tiempo: {
            horas: '4',
            min: '12'
        },
        profesor: 'Perro del mal',
        company: 'Perros locos'
    },
    {
        lenguaje: 'css',
        calificacion: '4.5',
        level: '1',
        tiempo: {
            horas: '4',
            min: '12'
        },
        profesor: 'Perro del mal',
        company: 'Perros locos'
    }
];
const cors = require('cors')

server.use(cors());

server.get('/', (req, res) => {
    res.json(serverRes);
});

server.get('/productos', (req, res) => {
    res.json(
        [
            {
                nombre: 'producto 1',
                precio: 100,
                categoiria: '1'
            },
            {
                nombre: 'producto 2',
                precio: 200,
                categoiria: '2'
            },
            {
                nombre: 'producto 3',
                precio: 300,
                categoiria: '3'
            },
            {
                nombre: 'producto 4',
                precio: 400,
                categoiria: '4'
            }
        ]
    );
});

server.get('/categorias', (req, res) => {
    res.json(
        [
            {
                id: '1',
                nombre: 'Juegos'
            },
            {
                id: '2',
                nombre: 'Comida'
            },
            {
                id: '3',
                nombre: 'Libros'
            },
            {
                id: '4',
                nombre: 'Deportes'
            }
        ]
    );
});

server.listen(3000, () => {
    console.log('Server is running!');
});