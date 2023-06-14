
class BattleScene extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('tankBody', '../../img/tankBody.png');
        for (let i = 1; i <= 5; i++) {
            this.load.image(`Barrel${i}`, `../../img/specialBarrel${i}_outline.png`);
            
        }
    }

    create ()
    {
        gameController.scene = this
        gameController.tank = new Tank("tank one",300,300) 
    }

    update(){
        gameController.tickRate = document.getElementById("customRange2").value
        document.getElementById("rangeValue").innerHTML = document.getElementById("customRange2").value
        gameController.tick++
        if(gameController.tick >= 1024) gameController.tick = 1
        if(gameController.tick >= gameController.tickRate && gameController.tickRate != 0){
            gameController.stepSimulation()
            gameController.tick = 1;
        }
    }
}
