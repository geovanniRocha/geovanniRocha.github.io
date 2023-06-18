
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

    newTank(name){
        let myTank = new Tank(name) 
        myTank.onStart = function(){
            this.dir = 1
        }
        myTank.onUpdate = function(){
            if(this.sprite.x > sceneConfig.width - 100)
                this.dir = 1 
            if(this.sprite.x < 100)
                this.dir = 2
            if(this.dir == 2)
                this.forward(this.speed)
            if(this.dir == 1)
                this.backward(this.speed)  
        }
    }

    create ()
    {
        gameController.scene = this
        this.newTank("tank1")
        this.newTank("tank2")       
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
