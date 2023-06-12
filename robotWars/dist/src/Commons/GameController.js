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

  loadTanks(){
    for (const tank of this.tanks) {
        tank.load()
      }
  }

  stepSimulation(){
    for (const tank of  this.tanks) {
        tank.update()
        tank.bounds()
    }
  }    


}


  