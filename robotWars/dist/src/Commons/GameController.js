class GameController {

  tickRate = 15
  tick = 0
  tanks = []
  direction = 5

  constructor() {
    if (!GameController.instance) {
      GameController.instance = this;
    }
    return GameController.instance;
  }

  registerTank(tank){
    this.tanks.push(tank)    
  }

  async loadTanks(){
    for (const tank of this.tanks) {
        await tank.load()
      }
  }

  stepSimulation(){
    for (const tank of  this.tanks) {
        tank.update()
        tank.bounds()
    }
  }    


}


  