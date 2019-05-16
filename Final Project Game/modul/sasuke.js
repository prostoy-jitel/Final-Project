class Sasuke {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 7;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]

        ];
    }
    chooseCell(character, character1) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == character1) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;

    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            if (this.energy <= 0) {
                this.die();
            }   

        }
    }
    eat() {

        var emptyCells = this.chooseCell(1, 3);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            this.energy+=3;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
            for (var i in grassEaterEaterArr) {

                if (newX == grassEaterEaterArr[i].x && newY == grassEaterEaterArr[i].y) {
                    grassEaterEaterArr.splice(i, 1);
                    break;
                }

            }

            if (this.energy >= 20) {
                this.mul();
            }


        }
        else {
            this.energy -= 2;
            this.move();
        }

    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newEat2 = new Sasuke(newX, newY, this.index);
            sasukeArr.push(newEat2);
            this.energy = 10;

        }
    }
    die() {

        matrix[this.y][this.x] = 0;
        for (var i in sasukeArr) {
            if (this.x == sasukeArr[i].x && this.y == sasukeArr[i].y) {
                sasukeArr.splice(i, 1);
                break;
            }

        }

    }
}