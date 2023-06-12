

class Tank{

  constructor(name, x, y){
    this.loaded = false
    if(!!!x) x = 300
    if(!!!y) y = 300
    this.name = name
    this.x = x
    this.y = y
    new GameController().registerTank(this) 
    this.sprite = gameController.scene.add.sprite(this.x, this.y, 'tankbase');    
  }


  bounds(){
      let w = this.sprite.width/2
      let h = this.sprite.height/2
      if(this.sprite.x < w) this.sprite.x = w
      if(this.sprite.y < h) this.sprite.y = h
      if(this.sprite.x > sceneConfig.width - w) this.sprite.x = sceneConfig.width - w
      if(this.sprite.y > sceneConfig.height- h) this.sprite.y = sceneConfig.height - h
 
  }

  update(){    
    this.forward()
    this.rotate(0.1) 
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
