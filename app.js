const express = require('express')
const http = require('http')
const helmet = require('helmet')
var compression = require('compression')
require('dotenv').config()
const {v4: uuidv4} = require('uuid')

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos
    next();
  });
app.use(helmet({contentSecurityPolicy: false}));
app.use(compression());
const serverHttp = http.createServer(app);

serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
app.use(express.static('./frontend'));
app.get('/api/get-uuid', function(req,res){
    res.json(uuidv4());

})