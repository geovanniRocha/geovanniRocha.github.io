Utils = {
    randomNumber: (max, minimum) =>{
        let rand = Math.round(Math.random() * max)
        if(rand < minimum) return minimum
        return rand
    },
    tossCoin:function(){
        return Math.random() <= 0.5
    },
    randomPosition: function(maxX, maxY, minimum){
        return new Vector2(this.randomNumber(maxX,minimum), this.randomNumber(maxY,minimum))
    }



}