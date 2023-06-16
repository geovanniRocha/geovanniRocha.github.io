class GameObject {     

    constructor(spriteName,name, x,y){        
        new GameController().registerSprite(this) 
        this.name = name
        this.sprite = gameController.scene.add.sprite( gc.spawnPosition().x,gc.spawnPosition().y, spriteName);
        this.colliderSize = (this.sprite.width + this.sprite.height) / 2
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
        Debbuger.drawLine(this.x, this.y, x, y)
        Debbuger.drawCircle(this.x, this.y, this.colliderSize)
        this.sprite.rotation = rad
    }

    distance(x,y){
        return this.getPosistion().distance(new Vector2(x,y))
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