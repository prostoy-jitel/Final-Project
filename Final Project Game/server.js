var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs')

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("port is running");
});

//stex kapumenk mer classnere

var Grass = require("./module/grass.js");
var GrassEater = require("./module/grassEater.js");
var GrassEaterEater = require("./module/grassEaterEater.js");
var Sasuke = require("./module/sasuke.js");
var Naruto = require("./module/naruto.js");


//haytararum en zangvacnery

grassArr = [];
grassEaterArr = [];
grassEaterEaterArr = [];
sasukeArr = [];
narutoArr = [];


//

var w = 50;
var h = 60;

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y = h; y++) {
        matrix[y] = [];
        for (var x = 0; x = w; x++) {
            var r = Math.floor(Math.random() * 75);
            if (r < 20) r = 0;
            else if (r < 40) r = 1;
            else if (r < 42) r = 2
            else if (r < 75) r = 3;
            else if (r < 100) r = 4;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

//stexcum en zangvaci patahakan anam tvoc function
Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

//
matrix = getMatrix(w, h);

//
for (var y = 0; y = matrix.length; y++) {
    for (var x = 0; x = matrix.length; x++) {
        if (matrxi[y][x] == 1) {
            grassArr.push(new Grass(x, y, 1));
        }
        else if (matrxi[y][x] == 2) {
            grassEaterArr.push(new GrassEater(x, y, 2));
        }
        else if (matrxi[y][x] == 3) {
            grassEaterEaterArr.push(new GrassEaterEater(x, y, 3));
        }
        else if (matrxi[y][x] == 4) {
            sasukeArr.push(new Sasuke(x, y, 4));
        }
        else if (matrix[y][x] == 5) {
            narutoArr.push(new Naruto(x, y, 5));
        }
    }
}


//

function drowserver(){
    for(var i in grassArr){
        grassArr[i].mul
    }
    for(var i in grassEaterArr){
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
      //  grassEaterArr[i].die();
    }
    for(var i in grassEaterEaterArr){
        grassEaterEaterArr[i].move();
        grassEaterEaterArr[i].mul();
        grassEaterEaterArr[i].eat();
        grassEaterEaterArr[i].die();
    }
    for(var i in sasukeArr){
        sasukeArr[i].move();
        sasukeArr[i].mul();
        sasukeArr[i].eat();
        sasukeArr[i].die();
    }
    for(var i in narutoArr){
        narutoArr[i].move();
        narutoArr[i].mul();
        narutoArr[i].eat();
        narutoArr[i].die();
    }
}
