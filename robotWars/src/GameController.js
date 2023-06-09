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

    stepSimulation(){
        for (const tank of  this.tanks) {
            tank.update()
        }
    }
    
  }
  

export {GameController}
  