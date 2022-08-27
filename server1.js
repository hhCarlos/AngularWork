const express = require('express');
const server = express();
const cors = require('cors')

server.use(cors());

server.get('/productos', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Xbox One',
            stock: 8,
            categoria: 1,
            importado: true
        },
        {
            id: 2,
            name: 'PlayStation 5',
            stock: 20,
            categoria: 1,
            importado: true
        },
        {
            id: 3,
            name: 'Iman Herradura caballo',
            stock: 100,
            categoria: 2,
            importado: false
        },
        {
            id: 4,
            name: 'Cable de cobre',
            stock: 400,
            categoria: 2,
            importado: false
        },
        {
            id: 5,
            name: 'Bacardi',
            stock: 18,
            categoria: 3,
            importado: false
        },
        {
            id: 6,
            name: 'Ginebra Guts',
            stock: 7,
            categoria: 3,
            importado: true
        }
    ]);
});

server.get('/categorias', (req, res) => {
    res.json([
        {
            id: 1,
            nombre: "Gamming"
        },
        {
            id: 2,
            nombre: "Tools"
        },
        {
            id: 3,
            nombre: "Alcohol"
        }
    ]);
});

server.listen(3000, () => {
    console.log('Servidor corriendo! Server1.js');
});
