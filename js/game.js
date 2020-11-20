class Game {
    constructor() {

    }

    getState(){
        database.ref('gameState').on("value", (data)=>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({gameState: state});
    }

    async start(){
        if (gameState === 0){
            var player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }

        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars = [car1, car2, car3, car4];
    }

    play(){
        form.Hide();
        Player.getPlayerInfo();

        if (allPlayers != undefined){
            //index = index of array cars, xy pos. of cars
            var index = 0;
            var x = 175;
            var y;

            for (var plr in allPlayers){
                //increase index for every player
                index = index+1;
                //position cars away from each other
                x = x+200;
                //positioning the car in y direction from database
                y = displayHeight-allPlayers[plr].distance;

                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index === player.index){
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }

        if (keyDown(UP_ARROW)){
            player.distance = player.distance+10;
            player.update();
        }

        drawSprites();
    }

    end(){
        game.update(2);
    }
}