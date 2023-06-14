class GameController {

  tickRate = 15
  tick = 0
  sprites = []
  direction = 5
  scene= undefined

  constructor() {
    if (!GameController.instance) {
      GameController.instance = this;
    }
    return GameController.instance;
  }

  registerSprite(sprite){
    this.sprites.push(sprite)    
  }


  loadTanks(){
    for (const sprite of this.sprites) {
      sprite.load()
      }
  }

  stepSimulation(){
    for (const sprite of  this.sprites) {
      sprite.update()
      this.bounds(sprite.sprite)
    }
  }    
  bounds(sprite){
    let w = sprite.width/2
    let h = sprite.height/2
    if(sprite.x < w) sprite.x = w
    if(sprite.y < h) sprite.y = h
    if(sprite.x > sceneConfig.width - w) sprite.x = sceneConfig.width - w
    if(sprite.y > sceneConfig.height- h) sprite.y = sceneConfig.height - h

}


}


  