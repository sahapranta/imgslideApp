const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const slideNumber = 10;
var currentSlide = 0;

app.use(express.static(path.join(__dirname, 'www')))

setInterval(function() {
    var slide = currentSlide++ % slideNumber;
    io.emit('showSlide', slide);
}, 2000)

http.listen(process.env.PORT || 8888, function(){
    console.log('server is running');
});
