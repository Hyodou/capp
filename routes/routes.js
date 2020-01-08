//call to database
const pool = require('../config/database')

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'This Shit'
        });
    });

    //rutas para clientes
    app.get('/clientes', (request, response) =>{
        pool.query('SELECT * FROM clientes', (error, result) =>{
            if(error) throw error;

            response.send(result);
        });
    });

    app.get('/clientes/:id', (request, response) =>{
        pool.query('SELECT * FROM clientes WHERE idclientes = ?', request.params.id, (error, result) =>{
            if(error) throw error;

            response.send(result);
        });
    });

    app.post('/clientes', (request, response)=>{
        pool.query('INSERT INTO clientes SET ?', request.body, (error, result) =>{
            if (error) throw error;

            response.status(201).send('Usuario creado con CC: ${result.insertID}');
        });
    });

    app.put('/clientes/:id', (request, response) =>{
        const id = request.params.id;
        pool.query('UPDATE clientes SET ? WHERE idclientes = ?', [request.body, id], (error, result) => {
            if (error) throw error;
    
            response.send('User updated successfully.');
        });
    });

    app.delete('/clientes/:id', (request, response) => {
        const id = request.params.id;
        pool.query('DELETE FROM clientes WHERE idclientes = ?', id, (error, result) => {
            if (error) throw error;
     
            response.send('User deleted.');
        });
    });
}
module.exports = router;