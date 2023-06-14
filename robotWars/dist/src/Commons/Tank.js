

class Tank extends GameObject{

  constructor(name, x, y){
    super("tankBody", name, x,y) 
    this.weapon = new Weapon(this, 3)
    this.dir = 2 
    
  }

  update(){  
    if(this.sprite.x > 500)
      this.dir = 1 
    if(this.sprite.x < 100)
      this.dir = 2
    if(this.dir == 2)
      this.forward()
    if(this.dir == 1)
      this.backward()      
  }
  
}
