// Debbuger = {
//     graphics: undefined,
//     enable:true,
//     toRender:[],
//     drawLine: function(fromX, fromY, toX, toY){
//         if(!!this.graphics) this.graphics.clear()
//         if(this.enable){
//             this.graphics = gc.scene.add.graphics()
//             this.graphics.lineStyle(2, 0xFF00FF);
//             this.graphics.lineBetween(fromX, fromY, toX, toY)
//             this.graphics.strokePath();
//         }
//     },
//     drawCircle:function(x,y, r){
//         const graphicsHandler = gc.scene.add.graphics()
//         if(this.enable){            
//             this.graphics.lineStyle(2, 0xFF00FF);
//             this.graphics.strokeCircle(x, y, r)
//             graphicsHandler.clear()
//         }        
//     }
// }


class Debug{
    constructor(){
        this.graphics = gc.scene.add.graphics()
    }

    drawLine(fromX, fromY, toX, toY){
        this.graphics.lineStyle(2, 0xFF00FF);
        this.graphics.lineBetween(fromX, fromY, toX, toY)
        this.graphics.strokePath();
    }

    drawCircle (x,y, r){
        this.graphics.lineStyle(2, 0xFF00FF);
        this.graphics.strokeCircle(x, y, r)
    }
    clear(){
        this.graphics.clear()
    }

}