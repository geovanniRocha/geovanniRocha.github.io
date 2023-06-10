let app = undefined

async function start(){
app = new PIXI.Application();
canvas = document.getElementById("pixi-canvas")
canvas.appendChild(app.view)


let tank = new Tank("tank one")
// await new GameController().loadTanks()

const left = keyboard("r")
left.press = () => {
    new GameController().stepSimulation();
}

document.getElementById('validate').onclick = ()=>{
    new GameController().stepSimulation();
};

}

start()
// Listen for frame updates
app.ticker.add(() => {
   
});
