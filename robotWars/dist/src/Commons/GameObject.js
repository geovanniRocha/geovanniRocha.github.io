class GameObject {     

    constructor(spriteName,name, x,y,angle, automaticPosition=true){        
        this.gameController = new GameController()
        this.gameController.registerSprite(this) 
        this.name = name
        if(automaticPosition)
            this.sprite = gameController.scene.add.sprite( gc.spawnPosition().x,gc.spawnPosition().y, spriteName);
        else
            this.sprite = gameController.scene.add.sprite( x,y, spriteName);
        if(!!angle)
            this.sprite.angle = angle
        
      
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
        return this.getPosition().distance(new Vector2(x,y))
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

    // Return: false if distance > episolon(destination not reached), true if reached destination
    goto(x,y,episolon=0.01){
        this.lookTo(x,y)
        if(this.distance(x,y) > episolon){
            this.forward()
            return false
        }
        return true
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