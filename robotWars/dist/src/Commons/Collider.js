class Collider{
    constructor(tank){
        this.gameController = new GameController()
        this.gameController.registerCollider(this)
        this.tank = tank
        
    }
    get x(){
         return this.tank.sprite.x   
    }
    get y(){
        return this.tank.sprite.y   
    }
    
}