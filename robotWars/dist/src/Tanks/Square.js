function newTankSquare (name){        
    let myTank = new Tank(name) 
    myTank.onStart = function(){
       this.status = 1;
    }
    myTank.onUpdate = function(){  
        
        if(this.status == 1){
            if(this.goto(100,100)) this.status++
        }else if(this.status == 2){
            if(this.goto(100,1000)) this.status++
        }else if(this.status == 3){
            if(this.goto(1000,1000)) this.status++
        }else if(this.status == 4){
            if(this.goto(1000,100)) this.status = 1
        }
    }
    return myTank
}