import { GameObjects } from "./gameObjects.js"

export class Hp extends GameObjects{

    //meow sound effect when you take damage
    private meowSFX = new Audio("sounds/meowSFX2.wav")

    //create new custom event
    private sweatCat = new CustomEvent("sweatCat")

    public damaged : boolean
    public gameOver : boolean
    private hp : number

    constructor(){

        super("hp")

        //set default boolean
        this.damaged = true
        this.gameOver = false

        //set hp to 100
        this.hp = 100

        //set score text
        this.div.innerText = "Academy HP: " + this.hp
    }

    public updateHp() : void{
        //dispatch event
        dispatchEvent(this.sweatCat)

        //take damage
        this.hp = this.hp - 5
        this.div.innerText = "Academy HP: " + this.hp
        this.meowSFX.play()

        //game is over when hp lower than 1hp
        if(this.hp < 1 ){
            this.endGame()
        } 
    }

    public endGame(){
        this.gameOver = true
    }

    public setDamagedTrue() : void {
        this.damaged = true
    }

    public setDamagedFalse() : void {
        this.damaged = false
    }
}