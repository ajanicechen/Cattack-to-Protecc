import { GameObjects } from "./gameObjects.js"

export class Mouse extends GameObjects{

    //create custom event
    private getScore = new CustomEvent("getScore")

    //set sound file for fireball sfx
    private fireballSFX = new Audio("sounds/fireball.mp3")

    private aliveMouse : boolean
    private gameOver : boolean

    constructor()  {

        super("mouse")

        //set true on default
        this.aliveMouse = true
        this.gameOver = false

        //place mouse
        this.x = (Math.floor(Math.random() * 10000) + (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public update() : void {
        //remove all mcie if game is over
        if (this.gameOver == true){
            this.div.remove()
        }
        else {
        // Move the mouse (x-value) to the left. 
        this.x -= 6
            
        // Draw the mouse on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        }
    }

    public checkCollision(x : number){
        if (x < 400 && this.aliveMouse){
            //set to false
            this.aliveMouse = false

            //respawn mice by relacing it
            this.x = 10000

            this.aliveMouse = true

            return true
        } 
    }

    public killMouse() : void {
        
        this.aliveMouse = false 

        dispatchEvent(this.getScore)

        //respawn mice by replacing it
        this.x = 10000
        
        //play fireball sfx
        this.fireballSFX.play()

        this.aliveMouse = true
    }

    public getX() {
        return this.x
    }

    public setGameOver() : void{
        this.gameOver = true
    }

    public getMouseDiv() {
        return this.div
    }
}