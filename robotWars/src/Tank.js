import { GameController } from "./GameController"


class Tank{
    constructor(name){
        this.name = name
        new GameController().registerTank(this)
    }

    update(){
        console.log("runUpdate:", this.name)
    }
}

export{Tank}