class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.button1 = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 0);

    this.input.position(displayWidth/2, 160);
    this.button.position(displayWidth/2, 200);
    
    this.button1.position(displayWidth-100, 100)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2, 100);
    })

    this.button1.mousePressed(()=> {
      game.update(0);
      player.updateCount(0);
      player.deletePlayers();
    })

  }
}
