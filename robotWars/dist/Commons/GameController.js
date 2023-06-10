class GameController {
  constructor() {
    if (!GameController.instance) {
      GameController.instance = this;
    }

    return GameController.instance;
  }

  tanks = []
  registerTank(tank){
    this.tanks.push(tank)    
  }

  async loadTanks(){
    for (const tank of  this.tanks) {
        await tank.load()
      }
  }

  stepSimulation(){
    for (const tank of  this.tanks) {
        tank.update()
    }
  }    
}


  