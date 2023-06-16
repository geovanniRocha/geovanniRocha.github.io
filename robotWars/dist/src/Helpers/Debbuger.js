Debbuger = {
    graphics: undefined,
    enable:false,
    drawLine: function(fromX, fromY, toX, toY){
        if(!!this.graphics) this.graphics.clear()
        if(this.enable){
            this.graphics = gc.scene.add.graphics()
            this.graphics.lineStyle(2, 0xFF00FF);
            this.graphics.lineBetween(fromX, fromY, toX, toY)
            this.graphics.strokePath();
        }
    },
    
    drawLine: function(fromVec2, ToVec2){
        if(!!this.graphics) this.graphics.clear()
        if(this.enable){
            this.graphics = gc.scene.add.graphics()
            this.graphics.lineStyle(2, 0xFF00FF);
            this.graphics.lineBetween(fromVec2.x, fromVec2.y, ToVec2.x, ToVec2.y)
            this.graphics.strokePath();
        }
    }

}