Debbuger = {
    graphics: undefined,
    drawLine: function(fromX, fromY, toX, toY){
        if(!!this.graphics) this.graphics.clear()
        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(2, 0xFFFFFF);
        this.graphics.moveTo(fromX, fromY);
        this.graphics.lineTo(toX, toY);
        global.app.stage.addChild(this.graphics);
    }

}