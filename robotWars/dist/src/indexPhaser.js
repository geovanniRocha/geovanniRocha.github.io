const gameController = new GameController()
const gc = new GameController()
const sceneConfig = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1500,
    zoom:1,
    scene: BattleScene,
    parent: 'game-container',
}
const game = new Phaser.Game(sceneConfig);
// gc.scene.scale.setZoom(0.3)
const Vector2 = Phaser.Math.Vector2


simumlate =  () => { new GameController().stepSimulation();} 
keyboard("t").press = simumlate

function evalCode(){
    let code = document.getElementById("codeArea").value
    eval(code)    
    document.getElementById("codeArea").value = ""
}
 
