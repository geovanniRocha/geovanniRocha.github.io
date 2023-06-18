class GameObject {     

    constructor(spriteName,name, x,y){        
        this.gameController = new GameController()
        this.gameController.registerSprite(this) 
        this.name = name
        this.sprite = gameController.scene.add.sprite( gc.spawnPosition().x,gc.spawnPosition().y, spriteName);
      
    }
    
    getPosition(){
        return new Vector2(this.sprite.x,this.sprite.y)
    }

    rotate(angle){
        this.sprite.angle += angle
    }

    forward(length){
        if(!!!length)
            length = 1    
        this.sprite.y += length * Math.sin(this.sprite.rotation)
        this.sprite.x += length * Math.cos(this.sprite.rotation)
    }

    backward(length){  
        if(!!!length)
            length = 1     
        this.sprite.y -= length * Math.sin(this.sprite.rotation)
        this.sprite.x -= length * Math.cos(this.sprite.rotation)
    }

    lookTo(x,y){
        let rad = Math.atan2( y - this.sprite.y , x- this.sprite.x) 
        this.sprite.rotation = rad
    }

    distance(x,y){
        return this.getPosistion().distance(new Vector2(x,y))
    }


    checkCollision(){
        if(this.gameController.colliders.length > 0 ) {     
            
            for (const collider of  this.gameController.colliders) {
                if(this.collider.id !== collider.id){
                    let dist = this.collider.distance(collider.position)
                    let colliding = this.collider.size/2 + collider.size/2
                    if(!this.entered && dist < colliding) {
                        this.onCollisionEnter(collider)
                        this.entered = true
                    }
                    if(this.entered && dist > colliding)
                    {
                        this.onCollisionExit(collider)
                        this.entered = false
                    }
                    if(this.entered && dist < colliding)
                    {
                        this.onCollisionStay(collider)
                    }
                }
            }
        }
      }





    get x(){
        return this.sprite.x
    }
    get y(){
        return this.sprite.y
    }
    get angle(){
        return this.sprite.angle
    }
    set position(val){
        this.sprite.x = val.x
        this.sprite.y = val.y
    }

}