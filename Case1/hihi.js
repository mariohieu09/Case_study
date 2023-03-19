let canvas = document.getElementById("game");
let ctx = canvas.getContext('2d');

let ke_duong = function (xP) {
    this.xP = xP;
    ctx.fillRect(this.xP,105,150,46);

}

ke_duong(104);
ke_duong(308);
ke_duong(512);
ke_duong(716);
ke_duong(920);

const orien_up = "up";
const orien_left = "left";
const orien_right = "right";
const orien_down = "down";
let cnv = function (){
    this.xPosition = 1000;
    this.yPosition = 0;
    this.speed = 20;
    this.width = 50;
    this.heigth = 50;
    this.image = "cnv.png";

    this.move = function (orien){
        switch(orien){
            case orien_right:
                this.xPosition -= this.speed;
                break;
            case orien_left:
                this.xPosition -= this.speed;
                break;
            case orien_down:
                this.xPosition -= this.speed;
                break;
            case orien_up:
                this.xPosition -= this.speed;
                break;
        }

    }
    this.show = function (){
        let image = new Image();
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        let width = this.width;
        let heigth = this.heigth
        image.onload = function (){
            ctx.drawImage(image, xPosition, yPosition, width, heigth);
        }
        image.src = this.image;
    }
}

let Cars = function (){
    this.xPosition = 0;
    this.yPosition = 0;
    this.speed = 20;
    this.width = 200;
    this.height = 100;
    this.image = "Lexus.png";

    this.move = function (orien){
        switch(orien){
            case orien_up:
                this.yPosition -= this.speed;
                break;
            case orien_down:
                this.yPosition += this.speed;
                break;
            case orien_left:
                this.xPosition -= this.speed;
                break;
            case orien_right:
                this.xPosition += this.speed;
        }

}
    this.moreSpd = function (x){
        if(x == 17){
            this.speed += 10;
        }else if(x == 90){
            this.speed -= 5;
        }
    }
    this.show = function (){
        let image = new Image();
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        let width = this.width;
        let height = this.height
        image.onload = function (){
            ctx.drawImage(image, xPosition, yPosition, width, height);
        }
        image.src = this.image;
    }
}
function GameBoard() {
    this.cnv = new cnv();
    this.car = new Cars();
    this.ctx = undefined;
    this.start = function () {
        this.ctx = document.getElementById('game').getContext('2d');
        this.car.show(this.ctx);
        this.cnv.show(this.ctx);

    };
    this.render = function () {
        this.ctx.clearRect(0, 0, 1000, 300);
        this.car.show(this.ctx);
        ke_duong(104);
        ke_duong(308);
        ke_duong(512);
        ke_duong(716);
        ke_duong(920);
        this.cnv.show(this.ctx);
    };
    this.kiemtra = function (){
        if(this.car.xPosition + this.car.width >= this.cnv.xPosition + this.cnv.heigth){
            alert("Endgame");
        };
    }
    this.moveCar = function (event) {
        var orien = 0;
        let x = 0;
        switch (event.which) {
            case 37:
                orien = orien_left;
                break;
            case 38:
                orien = orien_up;
                break;
            case 39:
                orien = orien_right;
                break;
            case 40:
                orien = orien_down;
                break;
            case 17:
                x = 17;
                break;
            case 90:
                x = 90;
                break;

        }
        this.car.moreSpd(x);
        this.cnv.move(orien);
        this.car.move(orien);
        this.render();
        this.kiemtra();
    }

}
var gameBoard = new GameBoard();
gameBoard.start();

