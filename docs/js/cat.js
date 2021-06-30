import { GameObjects } from "./gameObjects.js";
export class Cat extends GameObjects {
    constructor() {
        super("cat");
        this.x = 0;
        this.y = window.innerHeight - 265;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.img = document.createElement('img');
        this.img.src = "images/idleCat.png";
        this.div.appendChild(this.img);
    }
    attackCat() {
        this.img.src = "images/attackCat.png";
    }
    idleCat() {
        this.img.src = "images/idleCat.png";
    }
    sweatCat() {
        this.img.src = "images/sweatCat.png";
    }
    update() {
        this.y = window.innerHeight - 265;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=cat.js.map