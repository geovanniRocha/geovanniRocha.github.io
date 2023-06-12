
class BattleScene extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('tankbase', '../../img/tankbase.png');
    }

    create ()
    {
        gameController.scene = this
        gameController.tank = new Tank("tank one") 
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
