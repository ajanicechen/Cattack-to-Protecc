export class GameObjects {

    protected div : HTMLElement
    protected img : HTMLImageElement
    protected x : number = 0
    protected y : number = 0

    constructor(name : string){

        //select game tag
        const gameElement = document.querySelector('game') as HTMLElement

        //create div and append
        this.div = document.createElement(name)
        gameElement.appendChild(this.div)
    }
}