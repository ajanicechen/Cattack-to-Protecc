import { GameObjects } from "./gameObjects.js";
export class Score extends GameObjects {
    constructor() {
        super("score");
        this.score = 0;
        this.div.innerText = "Score: " + this.score;
    }
    updateScore() {
        this.score = this.score + 10;
        this.div.innerText = "Score: " + this.score;
    }
}
//# sourceMappingURL=score.js.map