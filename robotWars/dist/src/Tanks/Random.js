function newTankRandom (name){        
    let myTank = new Tank(name) 
    myTank.onStart = function(){
        this.newChance = true
        this.target = undefined
    }
    myTank.onUpdate = function(){ 
        if(this.newChance){
            this.target = Utils.randomPosition(1500,1500, 60)
            this.newChance = false
        }
        if(this.goto(this.target.x, this.target.y)){
            this.newChance = true
        }

        if(Utils.tossCoin())
            this.weapon.fire() 
    }
    return myTank
}