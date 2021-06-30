import { GameObjects } from "./gameObjects.js"

export class Academy extends GameObjects{

    constructor() {

        super("academy")

        //place academy
        this.x = 0
        this.y = window.innerHeight - 600
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    
    }

    public update() : void{
        this.y = window.innerHeight - 600
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        
    }

}