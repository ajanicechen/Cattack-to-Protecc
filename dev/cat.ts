import { GameObjects } from "./gameObjects.js"

export class Cat extends GameObjects{

    constructor()  {

        super("cat")

        // Generate a random x and y value within de width and height of the viewport
        this.x = 0
        this.y = window.innerHeight - 265
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        
        //create img tag
        this.img = document.createElement('img')
        //set img source
        this.img.src = "images/idleCat.png"

        //append image to div
        this.div.appendChild(this.img)
    }

    public attackCat() : void{
        //change img source to attackCat.png
        this.img.src = "images/attackCat.png"
    }

    public idleCat() : void{
        //change img source back to idleCat.png
        this.img.src = "images/idleCat.png"
    }

    public sweatCat() : void {
        //change img source back to idleCat.png
        this.img.src = "images/sweatCat.png"
    }

    //update cat location when resize window
    public update() : void {
        this.y = window.innerHeight - 265
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

