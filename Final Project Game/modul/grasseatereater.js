class GrassEaterEater extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
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
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            this.energy++;
            for (var i in grassEaterArr) {

                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }

            }
            if (this.energy >= 15) {
                this.mul();
            }


        }
        else {
            this.move();
            this.energy--;
        }

    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newEat1 = new GrassEaterEater(newX, newY, this.index);
            grassEaterEaterArr.push(newEat1);
            this.energy = 5;

        }
    }
    die() {

        matrix[this.y][this.x] = 0;
        for (var i in grassEaterEaterArr) {
            if (this.x == grassEaterEaterArr[i].x && this.y == grassEaterEaterArr[i].y) {
                grassEaterEaterArr.splice(i, 1);
                break;
            }

        }

    }
}