const express = require('express');
const server = express();
const cors = require('cors')

server.use(cors());

server.get(['', '/', '/home'], (req, res) => {
    res.send('Server ready to go!');
})

server.get('/categorias', (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: 'Dulces'
            },
            {
                id: 2,
                name: 'Enbutidos'
            },
            {
                id: 3,
                name: 'Lacteos'
            },
            {
                id: 4,
                name: 'Frutas y Verduras'
            },
            {
                id: 5,
                name: 'Alcohol y cigarros'
            },
            {
                id: 6,
                name: 'Juegos'
            }
        ]
    );
});

server.get('/productos', (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: 'Doritos Fuego',
                categoria: '1',
                precio: 12.5,
                stock: 4
            },
            {
                id: 2,
                name: 'Bacardi 2 Litros',
                categoria: '5',
                precio: 420,
                stock: 8
            },
            {
                id: 3,
                name: 'Pall Mall 20 Sandia',
                categoria: '5',
                precio: 65,
                stock: 10
            },
            {
                id: 4,
                name: 'Platanos verdes',
                categoria: '4',
                precio: 18,
                stock: 5
            },
            {
                id: 5,
                name: 'Fruta dragon',
                categoria: '4',
                precio: 70,
                stock: 3
            }
        ]
    );
});

server.listen(3007, () => {
    console.log('Servidor corriendo en el puerto 3007');
});