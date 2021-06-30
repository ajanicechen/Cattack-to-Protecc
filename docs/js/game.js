import { Academy } from "./academy.js";
import { Cat } from "./cat.js";
import { GameOverText } from "./gameOverText.js";
import { Hp } from "./hp.js";
import { Mouse } from "./mouse.js";
import { Score } from "./score.js";
export class Game {
    constructor() {
        this.battleBGM = new Audio("sounds/battleBGM.mp3");
        this.mice = [];
        console.log("hello");
        this.gameOver = false;
        this.battleBGM.volume = 0.2;
        this.academy = new Academy();
        this.cat = new Cat();
        this.score = new Score();
        this.hp = new Hp();
        this.spawnMouse();
        addEventListener("mousedown", () => this.cat.attackCat());
        addEventListener("mouseup", () => this.cat.idleCat());
        addEventListener("getScore", () => this.score.updateScore());
        addEventListener("sweatCat", () => this.cat.sweatCat());
        for (let mice of this.mice) {
            mice.getMouseDiv().addEventListener("click", () => mice.killMouse());
        }
        this.gameLoop();
    }
    gameLoop() {
        this.battleBGM.play();
        if (this.hp.gameOver == true) {
            if (this.gameOver == false) {
                this.gameOver = true;
                this.gameOverText = new GameOverText();
                for (let mice of this.mice) {
                    mice.setGameOver();
                }
            }
        }
        for (let mice of this.mice) {
            mice.update();
            if (mice.checkCollision(mice.getX())) {
                if (this.hp.damaged == true) {
                    this.hp.setDamagedFalse();
                    this.hp.updateHp();
                    this.hp.setDamagedTrue();
                }
            }
        }
        window.addEventListener("resize", () => this.cat.update());
        window.addEventListener("resize", () => this.academy.update());
        requestAnimationFrame(() => this.gameLoop());
    }
    spawnMouse() {
        for (let i = 0; i < 20; i++) {
            this.mice.push(new Mouse());
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map