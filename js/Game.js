class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(300, 200);
    car2 = createSprite(500, 200);
    car3 = createSprite(700, 200);
    car4 = createSprite(900, 200);
    cars = [car1, car2, car3, car4];

    car1.addImage("car1", carimg1);
    car2.addImage("car2", carimg2);
    car3.addImage("car3", carimg3);
    car4.addImage("car4", carimg4);

  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    player.getRank();

    background(ground);
    image(track , 0, -displayHeight * 4, displayWidth, displayHeight*5);
    image(crowdImg , 0, -displayHeight * 4, displayWidth, 200);

    if(allPlayers !== undefined){
      //var display_position = 130;

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 350;
      var y;

      for(var plr in allPlayers){
        //add 1 index for the every loop
        index += 1;
        
        //position the cars little away from eachother in x direction
        x = x + 200;

        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        
        
        if(index === player.index) {
          fill("yellow");
          circle(x,y += 10, 100);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          
        }

      }
    }

    

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50;
      player.update();
      carSound.play();
    }

    
    if(keyIsDown(RIGHT_ARROW) && player.index !== null) {
      car4.x += 100;
      //player.distance += 30;
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null) {
      car4.x -= 100;
    }

    if(player.distance > 5100) {
      gameState = 2;
      player.rank += 1;
      Player.updateRank(player.rank);
      fill("blue");
      textSize(40);
      textFont("pacifico");
      text("Rank: " +player.rank, camera.position.x, camera.position.y - 200);
    }
    drawSprites();
  }

  end() {
    console.log("game ended");
    //game.update(2);
  }

}
