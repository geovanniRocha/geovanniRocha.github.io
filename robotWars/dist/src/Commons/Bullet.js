class Bullet extends GameObject{
    constructor(x,y,r){
        super("Bullet1","Bullet",x,y,r,false)
        
        this.collider = new Collider(this)
        this.id = (+new Date)+Math.round((Math.random() * Math.pow(10,5)))
    }

    update(){
        this.forward(10)
        this.canDestroy()
       
        
    }

    canDestroy(){
        if((this.x > sceneConfig.width)||(this.x < 0 )||(this.y > sceneConfig.height)||(this.y < 0 ) ){
            this.sprite.destroy(true)
            this.gameController.removeSprite(this.id)
        }

        
        
    }
    

}