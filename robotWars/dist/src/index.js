let app = undefined
const gameController = new GameController()
tankBase = PIXI.Assets.load('../../img/tankbase.png').then


app = new PIXI.Application();
canvas = document.getElementById("pixi-canvas")
canvas.appendChild(app.view)


let tank = new Tank("tank one") 


simumlate =  () => { new GameController().stepSimulation();} 
keyboard("r").press = simumlate
document.getElementById('validate').onclick = simumlate
 
// Listen for frame updates
app.ticker.add(() => {
    gameController.tickRate = document.getElementById("customRange2").value
    document.getElementById("rangeValue").innerHTML = document.getElementById("customRange2").value
    gameController.tick++
    if(gameController.tick >= 1024) gameController.tick = 1
    if(gameController.tick >= gameController.tickRate && gameController.tickRate != 0){
        gameController.stepSimulation()
        gameController.tick = 1;
    }
});
