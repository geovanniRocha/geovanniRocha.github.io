class GameObject { 
    

    constructor(spriteName,name, x,y){        
        new GameController().registerSprite(this) 
        this.name = name
        this.sprite = gameController.scene.add.sprite(x, y, spriteName); 
    }


    getPos(){
        return {x:this.sprite.x, y:this.sprite.y}
    }
    
    rotate(angle){
        this.sprite.angle += angle
    }

    forward(length){
        if(!!!length)
            length = 1    
        this.sprite.y += length * Math.sin(this.sprite.rotation)
        this.sprite.x += length * Math.cos(this.sprite.rotation)
        return this.getPos()
    }

    backward(length){  
        if(!!!length)
            length = 1     
        this.sprite.y -= length * Math.sin(this.sprite.rotation)
        this.sprite.x -= length * Math.cos(this.sprite.rotation)
        return this.getPos()
    }

    lookTo(x,y){
        let rad = Math.atan2( y - this.sprite.y , x- this.sprite.x) 
        Debbuger.drawLine(this.sprite.x, this.sprite.y, x, y)
        this.sprite.rotation = rad
    }
}