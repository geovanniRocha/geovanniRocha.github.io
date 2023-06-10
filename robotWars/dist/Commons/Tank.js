

class Tank{
  constructor(name){
    this.name = name
    this.texture = undefined
    this.sprite = undefined
    new GameController().registerTank(this)
    new GameController().loadTanks()
  }

   async load(){
    this.texture = await PIXI.Assets.load('tankbase.png');
    this.sprite = new PIXI.Sprite(this.texture); 
    this.sprite.x = app.renderer.width / 2;
    this.sprite.y = app.renderer.height / 2;
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;

    app.stage.addChild(this.sprite);
  }


  update(){
    console.log("runUpdate:", this.name)
    this.sprite.x += 1.0
  }
}
