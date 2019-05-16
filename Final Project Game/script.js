var side = 25;

function setup() {
    noStroke();
    frameRate(5);
    createCanvas(w * side, h * side);
    background('#acacac');


    for (var i = 0; i < h; i++) {
        matrix[i] = [];
        for (var k = 0; k < w; k++) {
            matrix[i][k] = Math.round(random(5));
        }
    }



}

