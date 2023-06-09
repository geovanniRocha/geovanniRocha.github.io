import { Application, Sprite, Assets } from 'pixi.js';
import { GameController } from './GameController';
import { Tank } from './tank';
import { keyboard } from './Helpers/keyboard';


const app = new Application();
document.getElementById("pixi-canvas").appendChild(app.view)


const texture = await Assets.load('tankbase.png');
const bunny = new Sprite(texture);
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

app.stage.addChild(bunny);

let tank = new Tank("tank one")




const left = keyboard("r")
left.press = () => {
    new GameController().stepSimulation();
    debugger
}

document.getElementById('validate').onclick = ()=>{
    new GameController().stepSimulation();
};

// Listen for frame updates
app.ticker.add(() => {
    // each frame we spin the bunny around a bit
   


    bunny.rotation += 0.01; 
});