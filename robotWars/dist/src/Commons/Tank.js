

class Tank{
  constructor(name){
    this.name = name
    this.texture = undefined
    this.sprite = undefined
    new GameController().registerTank(this)
    this.load()
    this.sprite.x = 300;
    this.sprite.y = 400;
    console.log("new Tank:", name)

  }
    
   async load(){
    console.log("loaded:", this.name)
    this.texture = await PIXI.Assets.load('../../img/tankbase.png');
    if(this.sprite == undefined)
      this.sprite = new PIXI.Sprite(this.texture); 
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    app.stage.addChild(this.sprite);
  }


  async update(){
    console.log("runUpdate:", this.name)
        
  }

  moveTank(){
    
  }

  async start(){
    
  }
}
