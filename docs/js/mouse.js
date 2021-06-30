import { GameObjects } from "./gameObjects.js";
export class Mouse extends GameObjects {
    constructor() {
        super("mouse");
        this.getScore = new CustomEvent("getScore");
        this.fireballSFX = new Audio("sounds/fireball.mp3");
        this.aliveMouse = true;
        this.gameOver = false;
        this.x = (Math.floor(Math.random() * 10000) + (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update() {
        if (this.gameOver == true) {
            this.div.remove();
        }
        else {
            this.x -= 6;
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    }
    checkCollision(x) {
        if (x < 400 && this.aliveMouse) {
            this.aliveMouse = false;
            this.x = 10000;
            this.aliveMouse = true;
            return true;
        }
    }
    killMouse() {
        this.aliveMouse = false;
        dispatchEvent(this.getScore);
        this.x = 10000;
        this.fireballSFX.play();
        this.aliveMouse = true;
    }
    getX() {
        return this.x;
    }
    setGameOver() {
        this.gameOver = true;
    }
    getMouseDiv() {
        return this.div;
    }
}
//# sourceMappingURL=mouse.js.map