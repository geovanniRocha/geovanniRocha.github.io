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
    }

}