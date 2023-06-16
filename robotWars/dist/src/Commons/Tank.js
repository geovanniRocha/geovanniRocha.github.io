

class Tank extends GameObject{

  constructor(name){ 
    super("tankBody", name) 
    this.weapon = new Weapon(this, 3)
    this.collider = new Collider(this)
    this.dir = 2
    this.speed = (Math.random()*4)+1 
    this.onUpdate = ()=>{}
  }

  update(){  
    if(!!this.onUpdate) this.onUpdate(this)     
  } 
}
