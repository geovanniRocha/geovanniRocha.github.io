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

  spawnPosition(){
    let tankCount = gc.sprites.filter(x=> {return x.constructor.name == 'Tank'}).length
    if(tankCount == 1)return new Vector2( 100, sceneConfig.height / 2)
    if(tankCount == 2)return new Vector2( sceneConfig.width - 100, sceneConfig.height / 2)
    if(tankCount == 3)return new Vector2( sceneConfig.width /2, 100)
    if(tankCount == 4)return new Vector2( sceneConfig.width /2, sceneConfig.height -100)
    return  new Vector2(0)
  }


}


  