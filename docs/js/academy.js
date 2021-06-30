import { GameObjects } from "./gameObjects.js";
export class Academy extends GameObjects {
    constructor() {
        super("academy");
        this.x = 0;
        this.y = window.innerHeight - 600;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update() {
        this.y = window.innerHeight - 600;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=academy.js.map