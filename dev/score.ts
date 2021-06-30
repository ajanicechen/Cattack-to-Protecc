import { GameObjects } from "./gameObjects.js"

export class Score extends GameObjects{

    private score : number

    constructor(){

        super("score")

        //set score to 0 by default
        this.score = 0

        //set score text
        this.div.innerText = "Score: " + this.score
    }

    public updateScore() : void{
        //+10 score
        this.score = this.score + 10
        this.div.innerText = "Score: " + this.score
    } 
}