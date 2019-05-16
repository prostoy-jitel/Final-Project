class Naruto {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 6;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
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

        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            this.energy+3;

            for (var i in sasukeArr) {
                if (newX == sasukeArr[i].x && newY == sasukeArr[i].y) {
                    sasukeArr.splice(i, 1);
                    break;
                }

            }


            if (this.energy >= 25) {
                this.mul();
            }


        }
        else {
            this.energy-=2;
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

            var newEat3 = new Naruto(newX, newY, this.index);
            narutoArr.push(newEat3);
            this.energy = 6;

        }
    }
    die() {

        matrix[this.y][this.x] = 0;
        for (var i in narutoArr) {
            if (this.x == narutoArr[i].x && this.y == narutoArr[i].y) {
                narutoArr.splice(i, 1);
                break;
            }

        }

    }

}