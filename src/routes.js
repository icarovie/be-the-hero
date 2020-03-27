const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/', (request, response) => {

    //return response.send('Hello World');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Icaro Vieira',
        skills: 'Muito bom em Front End'
    })
});

// Create
routes.post('/ongs', async (request, response) => {
    //const data = request.body;
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
});

module.exports = routes