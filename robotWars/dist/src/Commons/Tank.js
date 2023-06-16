

class Tank extends GameObject{

  constructor(name){
    super("tankBody", name) 
    this.weapon = new Weapon(this, 3)
    this.dir = 2
    this.speed = (Math.random()*4)+1    
  }

  update(){  
    if(this.sprite.x > sceneConfig.width - 100)
      this.dir = 1 
    if(this.sprite.x < 100)
      this.dir = 2
    if(this.dir == 2)
      this.forward(this.speed)
    if(this.dir == 1)
      this.backward(this.speed)      
  }
  
}
