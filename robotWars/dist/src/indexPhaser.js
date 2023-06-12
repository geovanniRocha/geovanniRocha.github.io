const gameController = new GameController()
const gc = new GameController()
const sceneConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    scene: BattleScene,
    parent: 'game-container',
}

const game = new Phaser.Game(sceneConfig);


simumlate =  () => { new GameController().stepSimulation();} 
keyboard("t").press = simumlate
document.getElementById('validate').onclick = simumlate
 
