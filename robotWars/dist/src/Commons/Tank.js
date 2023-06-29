

class Tank extends GameObject{

  constructor(name){ 
    super("tankBody", name) 
    this.weapon = new Weapon(this, 3)
    this.collider = new Collider(this)
    this.speed = 100
    this._started = false
    
    this.onUpdate = ()=>{}    
    this.onStart= ()=>{}
    this.onCollisionStay = ()=>{}  
    this.onCollisionEnter = ()=>{}  
    this.onCollisionExit = ()=>{}  
    this.isActive = true
  }


  update(){  
    if(!this.isActive) return
    
    if(!this._started){
      this.lookTo(sceneConfig.width /2, sceneConfig.height /2)
      this.onStart(this)
      this._started = true
    }
    if(!!this.onUpdate) this.onUpdate(this)
    this.checkCollision()
  }
}
