class Weapon extends GameObject{
    tank = undefined
    constructor(tank, model){
        super(`Barrel${model}`,0, 0)
        this.tank = tank  
        this.sprite.setOrigin(0.25,0.5) 
        this.debug = new Debug()
        this.cooldown = 50
        this.maxCooldown = 50
    }
    
    update(){
        this.cooldown -=1
        this.sprite.x = this.tank.sprite.x
        this.sprite.y = this.tank.sprite.y        
    }
    fire(){
        if(this.cooldown == 0){
            new Bullet(this.tank.sprite.x, this.tank.sprite.y, this.sprite.angle)
            this.cooldown = this.maxCooldown
        }
    }
}