let app = undefined
const gameController = new GameController()

async function start(){
app = new PIXI.Application();
canvas = document.getElementById("pixi-canvas")
canvas.appendChild(app.view)


let tank = new Tank("tank one")
// await new GameController().loadTanks()

keyboard("r").press = () => {
    new GameController().stepSimulation();
}

keyboard("t").press = () => {
    new GameController().tanks[0].moveTank();
}

document.getElementById('validate').onclick = ()=>{
    new GameController().stepSimulation();
};

}

start()
// Listen for frame updates
app.ticker.add(() => {
   
});
