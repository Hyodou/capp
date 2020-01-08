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
}
module.exports = router;