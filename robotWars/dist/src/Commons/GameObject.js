class GameObject {     

    constructor(spriteName,name, x,y){        
        new GameController().registerSprite(this) 
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
        Debbuger.drawLine(this.sprite.x, this.sprite.y, x, y)
        this.sprite.rotation = rad
    }

    distance(x,y){
        return this.getPosistion().distance(new Vector2(x,y))
    }
}