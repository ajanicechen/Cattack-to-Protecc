export class GameObjects {
    constructor(name) {
        this.x = 0;
        this.y = 0;
        const gameElement = document.querySelector('game');
        this.div = document.createElement(name);
        gameElement.appendChild(this.div);
    }
}
//# sourceMappingURL=gameObjects.js.map