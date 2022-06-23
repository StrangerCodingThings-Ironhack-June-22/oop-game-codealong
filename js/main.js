

class Game {
    constructor(){
        this.player = null; // will store an instance of the class Player
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();
    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            } else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
    }
}


class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        
        // this.domElement = null;
        // this.createDomElement();

        this.domElement = this.createDomElement();

    }
    createDomElement(){
        // create dom element
        const newElm = document.createElement('div');

        // set id and css 
        newElm.id = "player";
        newElm.style.left = this.positionX + "vw";
        newElm.style.bottom = this.positionY + "vh";

        // append to the dom
        const boardElm = document.getElementById("board"); //
        boardElm.appendChild(newElm);

        return newElm;
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}





const game = new Game();
game.start();


