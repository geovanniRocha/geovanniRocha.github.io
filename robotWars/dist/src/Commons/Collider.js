class Collider{
    constructor(gameObject){
        this.gameController = new GameController()
        this.gameController.registerCollider(this)
        this.size = (gameObject.sprite.width + gameObject.sprite.height) / 2
        this.gameObject = gameObject
        // this.id = Math.round((Math.random() * Math.pow(10,5)))
        this.id = (+new Date)+Math.round((Math.random() * Math.pow(10,5)))
    }
    get x(){
         return this.gameObject.sprite.x   
    }
    get y(){
        return this.gameObject.sprite.y   
    }
    get position(){
        return new Vector2(this.gameObject.sprite.x,this.gameObject.sprite.y)
    }
    distance(vec2) {
        return this.position.distance(vec2)
    }


    
}