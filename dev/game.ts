import { Academy } from "./academy.js"
import { Cat } from "./cat.js"
import { GameOverText } from "./gameOverText.js"
import { Hp } from "./hp.js"
import { Mouse } from "./mouse.js"
import { Score } from "./score.js"


export class Game {

    private battleBGM = new Audio("sounds/battleBGM.mp3")

    private cat : Cat
    private mice : Mouse[] = []
    private academy : Academy
    private score : Score
    private hp : Hp
    private gameOverText : GameOverText
    private gameOver : boolean

    constructor() {

        console.log("hello")

        this.gameOver = false

        //lower BGM volume so ur ears dont get blasted off
        this.battleBGM.volume = 0.2

        //create academy
        this.academy = new Academy()

        //create cat
        this.cat = new Cat()
        
        //create score
        this.score = new Score()

        this.hp = new Hp()

        //create mice
        this.spawnMouse()

        //event listeners to change cat sprite
        addEventListener("mousedown", ()=>this.cat.attackCat())    
        addEventListener("mouseup", ()=>this.cat.idleCat())
        addEventListener("getScore", ()=> this.score.updateScore())
        addEventListener("sweatCat", ()=> this.cat.sweatCat())

        for(let mice of this.mice){
            mice.getMouseDiv().addEventListener("click", ()=>mice.killMouse())   
        }
        
        this.gameLoop()
    }

    private gameLoop() : void {
        //loop battle music
        this.battleBGM.play()

        if (this.hp.gameOver == true){

            if(this.gameOver == false){

                this.gameOver = true
                this.gameOverText = new GameOverText()

                for(let mice of this.mice){
                    mice.setGameOver()
                }
            }
        }
    
        // update mice
        for (let mice of this.mice) {
            mice.update()

            //check "collision"
            if(mice.checkCollision(mice.getX())){
                if(this.hp.damaged == true){
                    this.hp.setDamagedFalse()
                    this.hp.updateHp()
                    this.hp.setDamagedTrue()
                }   
            } 
        }

        //if resize window, update div location
        window.addEventListener("resize", ()=>this.cat.update())
        window.addEventListener("resize", ()=>this.academy.update())

        requestAnimationFrame(() => this.gameLoop())
    }

    private spawnMouse() : void {
        for (let i = 0; i < 20 ; i++) {
            this.mice.push(new Mouse())
        }
    }

}

new Game()