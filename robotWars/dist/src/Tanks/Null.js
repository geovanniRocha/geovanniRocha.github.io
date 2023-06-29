function newTankNull (name){        
    let myTank = new Tank(name) 
    myTank.onStart = function(){
       
    }
    myTank.onUpdate = function(){ 
        
    }
    return myTank
}