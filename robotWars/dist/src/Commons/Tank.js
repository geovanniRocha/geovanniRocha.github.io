

class Tank{

  constructor(name, x, y){
    this.loaded = false
    if(!!!x) x = 300
    if(!!!y) y = 300
    this.name = name
    this.sprite = undefined
    this.texture = undefined
    this.x = x
    this.y = y
    this.load() 
    new GameController().registerTank(this)
    Logger.debug("new Tank:", name)
  }
    
  async load(){
  
    this.texture = await PIXI.Assets.load('../../img/tankbase.png')
    
      
    if(this.sprite == undefined)
      this.sprite = new PIXI.Sprite(this.texture); 
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    app.stage.addChild(this.sprite);
    this.sprite.y = this.x
    this.sprite.x = this.y
    this.loaded = true 
      
      
    }

  bounds(){
      let w = this.sprite.width/2
      let h = this.sprite.width/2
      if(this.sprite.x < w) this.sprite.x = w
      if(this.sprite.y < h) this.sprite.y = h
      if(this.sprite.x > app.screen.width- w) this.sprite.x = app.screen.width - w
      if(this.sprite.y > app.screen.height- h) this.sprite.y = app.screen.height - h
  
  }

  async update(){
    Logger.debug("runUpdate:", this.name)
    if(gameController.direction == 1){
      this.forward()
      this.rotate(1) 
    }
    if(gameController.direction == 2)
      this.sprite.x -= 1.0
    if(gameController.direction == 3)
      this.sprite.y += 1.0
    if(gameController.direction == 4)
      this.sprite.y -= 1.0
    if(gameController.direction == 5){
      this.sprite.y = this.x
      this.sprite.x = this.y
      gameController.direction = 1
    }      
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
    Debbuger.drawLine(this.sprite.x,  this.sprite.y,x,y)
    this.sprite.rotation = rad
  }
}
