

class Tank extends GameObject{

  constructor(name){ 
    
    
    super("tankBody", name) 
    this.debug = new Debug()
    this.weapon = new Weapon(this, 3)
    this.collider = new Collider(this)
    this.speed = 10
    this.started = false
    
    this.onUpdate = ()=>{}    
    this.onStart= ()=>{}
    this.onCollisionStay = ()=>{}  
    this.onCollisionEnter = ()=>{}  
    this.onCollisionExit = ()=>{}  
  }


  update(){  
    if(!this.started){
      this.onStart(this)
      this.started = true
    }
    if(!!this.onUpdate) this.onUpdate(this)
    this.debug.clear()
    this.debug.drawCircle(this.x, this.y, this.collider.size/2)
    this.checkCollision()
  }
}
