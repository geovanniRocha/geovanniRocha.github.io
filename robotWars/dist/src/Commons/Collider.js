class Collider{
    constructor(tank){
        this.gameController = new GameController()
        this.gameController.registerCollider(this)
        this.size = (tank.sprite.width + tank.sprite.height) / 2
        this.tank = tank
        this.id = Math.round((Math.random() * Math.pow(10,5)))

        
    }
    get x(){
         return this.tank.sprite.x   
    }
    get y(){
        return this.tank.sprite.y   
    }
    get position(){
        return new Vector2(this.tank.sprite.x,this.tank.sprite.y)
    }
    distance(vec2) {
        return this.position.distance(vec2)
    }


    
}