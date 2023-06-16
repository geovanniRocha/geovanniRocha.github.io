Debbuger = {
    graphics: undefined,
    enable:true,
    drawLine: function(fromX, fromY, toX, toY){
        if(!!this.graphics) this.graphics.clear()
        if(this.enable){
            this.graphics = gc.scene.add.graphics()
            this.graphics.lineStyle(2, 0xFF00FF);
            this.graphics.lineBetween(fromX, fromY, toX, toY)
            this.graphics.strokePath();
        }
    },
    drawCircle:function(x,y, r){
        let graphicsHandler = gc.scene.add.graphics()
        if(this.enable){
            
            this.graphics.lineStyle(2, 0xFF00FF);
            this.graphics.strokeCircle(x, y, r)
            graphicsHandler.clear()
        }
        
    }
    
    

}