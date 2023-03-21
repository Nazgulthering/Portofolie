// imports
const express = require('express');
const server = express();
const port = 3000;
const fs = require('fs');
var php = require('node-php');
const phpNode = require('php-node');



// Static files
server.use(express.static('public'))
server.use('/css', express.static(__dirname + './public/css'))
server.use('/js', express.static(__dirname + './public/js'))
server.use('/img', express.static(__dirname + './public/img'))
server.use('/php', express.static(__dirname + './public/php'))


//Set views
server.set('views', './views')
server.set('view engine', 'ejs')
server.engine('php', phpNode);
server.set('view engine', 'php');



//get stuff

server.get('', (req, res) => {
    res.sendFile(__dirname + '/views/Index.html')
})
server.get('/OmOss', (req, res) => {
    res.sendFile(__dirname + '/views/OmOss.html')
})
server.get('/tjenester', (req, res) => {
    res.render('/php/Tjenester.php')
})




//Listen on port 3000
server.listen(port, () => console.log("Listening on port", +port, '127.0.0.1'));