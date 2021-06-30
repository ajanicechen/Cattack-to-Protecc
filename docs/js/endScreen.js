import { GameObjects } from "./gameObjects.js";
export class EndScreen extends GameObjects {
    constructor() {
        super("endscreen");
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.div.appendChild(text);
        text.innerText = "Game Over";
        btn.addEventListener("click", () => console.log("this is the end"));
    }
}
//# sourceMappingURL=endScreen.js.map