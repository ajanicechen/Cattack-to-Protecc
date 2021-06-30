import { GameObjects } from "./gameObjects.js";
export class Hp extends GameObjects {
    constructor() {
        super("hp");
        this.meowSFX = new Audio("sounds/meowSFX2.wav");
        this.sweatCat = new CustomEvent("sweatCat");
        this.damaged = true;
        this.gameOver = false;
        this.hp = 100;
        this.div.innerText = "Academy HP: " + this.hp;
    }
    updateHp() {
        dispatchEvent(this.sweatCat);
        this.hp = this.hp - 5;
        this.div.innerText = "Academy HP: " + this.hp;
        this.meowSFX.play();
        if (this.hp < 1) {
            this.endGame();
        }
    }
    endGame() {
        this.gameOver = true;
    }
    setDamagedTrue() {
        this.damaged = true;
    }
    setDamagedFalse() {
        this.damaged = false;
    }
}
//# sourceMappingURL=hp.js.map