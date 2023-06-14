class Weapon extends GameObject{
    tank = undefined
    constructor(tank, model){
        super(`Barrel${model}`,0, 0)
        this.tank = tank  
        this.sprite.setOrigin(0.25,0.5)
    }
    
    update(){
        this.sprite.x = this.tank.sprite.x
        this.sprite.y = this.tank.sprite.y
        this.lookTo(600,600)
    }
}